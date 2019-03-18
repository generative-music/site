import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import { applyUpdate } from 'offline-plugin/runtime';
import './about.scss';

const handleUpdateClick = e => {
  e.preventDefault();
  applyUpdate(() => {
    window.location.reload();
  });
};

const AboutTabComponent = ({ version, isUpdateAvailable, isOnline }) => {
  const followBtnRef = useRef(null);
  useEffect(
    () => {
      if (window.twttr && followBtnRef.current) {
        window.twttr.widgets.createFollowButton(
          'alex_bainter',
          followBtnRef.current,
          { showCount: false }
        );
      }
    },
    window.twttr,
    followBtnRef.current
  );

  return (
    <div className="about-tab">
      <p>
        This site is a collection of generative music pieces which can be
        listened to. The term &quot;generative music&quot; has been used
        especially by Brian Eno to describe music which changes continuously and
        is created by a system. Such systems often generate music for as long as
        one is willing to listen.
      </p>
      <p>
        The pieces featured on this site are not recordings. The music is
        generated by a different system created for each piece. These systems
        have been designed such that each performance is unique and plays
        continuously without repetition.
      </p>
      <p>
        Though not a requirement of generative music, most of the pieces
        featured are quite minimal and ambient. Here &quot;ambient&quot; means
        the music is intended to enhance one&apos;s environment but not demand
        attention.
      </p>
      <p>
        If you have questions or feedback, send an email to{' '}
        <a href="mailto:alex@alexbainter.com?Subject=Generative Music">
          alex@alexbainter.com
        </a>
      </p>
      <p>
        Follow on Twitter for app news and updates: <span ref={followBtnRef} />
      </p>
      <p>
        {`v${version}`}
        {isUpdateAvailable && isOnline && (
          <span>
            {' '}
            -{' '}
            <a href="/" onClick={handleUpdateClick}>
              Load latest version
            </a>
          </span>
        )}
      </p>
      <p>
        Made by{' '}
        <a href="https://alexbainter.com" target="_blank">
          Alex Bainter
        </a>
      </p>
    </div>
  );
};

AboutTabComponent.propTypes = {
  version: propTypes.string,
  isUpdateAvailable: propTypes.bool,
  isOnline: propTypes.bool,
};

export default AboutTabComponent;
