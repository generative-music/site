import React from 'react';
import './about.scss';

const AboutTabComponent = () => (
  <div className="about-tab">
    <p>
      This site is a collection of generative music pieces which can be played.
      The term &quot;generative music&quot; has been used especially by Brian
      Eno to describe music which changes continously and is created by a
      system. Such systems often generate music for as long as one is willing to
      listen.
    </p>
    <p>
      The pieces featured on this site are not recordings. The music is
      generated by a different system created for each piece. These systems have
      been designed such that each performance is unique and plays continously
      without repetition.
    </p>
    <p>
      Though not a requirement of generative music, most of the pieces featured
      are quite minimal and ambient. Here &quot;ambient&quot; means the music is
      intended to enhance one&apos;s environment but not demand attention. The
      music can be played as a background element without interrupting or
      obscuring other sonic aspects of the environment.
    </p>
    <p>
      Personally, I find this music ideal for listening to during long sessions
      of concentration, like while working or reading. I often have one of the
      pieces playing for an entire workday. I prefer not having to fuss with
      playlists, and the uniformity of each piece means there are no distracting
      song changes.
    </p>
    <p>
      If you have feedback or questions, please email me at{' '}
      <a href="mailto:alex@alexbainter.com">alex@alexbainter.com</a>.
    </p>
    <p>- Alex Bainter</p>
  </div>
);

export default AboutTabComponent;