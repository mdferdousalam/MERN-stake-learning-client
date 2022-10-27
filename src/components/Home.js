import React from 'react';
import { useLoaderData } from 'react-router-dom';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Home = () => {
    const sliderData = useLoaderData()
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div>
            <AutoplaySlider

                play={true}
                cancelOnInteraction={false}
                fillParent={false}
                bullets={false}
                interval={2000} className='w-1/2' animation="cubeAnimation">
                <div data-src={sliderData[0].image} />
                <div data-src={sliderData[1].image} />
                <div data-src={sliderData[2].image} />
                <div data-src={sliderData[3].image} />
                <div data-src={sliderData[4].image} />
                <div data-src={sliderData[5].image} />
            </ AutoplaySlider>

        </div>
    );
};

export default Home;