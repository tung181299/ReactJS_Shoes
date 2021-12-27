import React, { Component } from 'react';
import Banner from './Banner/Banner';
import Filter from './Filter/Filter';
import ShoesShopRedux from './ShoesList/ShoesShopRedux';
import SmartChatbot from './Chatbot/SmartChatbot';

export default class Home extends Component {
  render() {
    return (
      <div>
        <SmartChatbot />
        <Banner />
        <Filter />
        <ShoesShopRedux />

      </div>
    );
  }
}
