import React from 'react';
import TeamCard from '../TeamCard'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './index.css'


class Gallery2 extends React.Component {  
  constructor () {
    super ()
  }
  
  responsive = {
    1024: { items: 2 },
  };
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  };

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  };
  
  
  galleryTeams() {
    return (
      [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
        <div key={`key-${i}`} className="">
            <TeamCard />
        </div>
      ))
    )
  }

  render() {
      var items = [], responsive = {}
      items = this.galleryTeams()
      responsive = this.responsive
      const { partnersIndex } = this.props
    return (
      <div className="margin">
          <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            items={items}
            duration={400}
            autoPlay={false}
            startIndex = {partnersIndex % items.length}
            fadeOutAnimation={false}
            mouseDragEnabled={false}
            playButtonEnabled={false}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            responsive={responsive}
            autoPlayActionDisabled={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
            
          />
      </div>
      
    );
  }
}

export default Gallery2