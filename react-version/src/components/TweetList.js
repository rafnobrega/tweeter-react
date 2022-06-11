import React from 'react';
import Tweet from './Tweet';

function TweetList(){
  return (
    <main className="container">
      <section className="tweets">
        <Tweet />
        <Tweet />
      </section>
    </main>
  );
}

export default TweetList;

