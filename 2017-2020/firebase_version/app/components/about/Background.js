import React from 'react'

export default () =>
  <section className="section">
    <div className="section__title">Background</div>
    <div className="section__content">
      <p>I have more than { parseInt((new Date()).getFullYear() - 2012, 0) } years of work experience working in different industries such as digital marketing, e-commerce, streaming (video and audio) for high concurrency users and recently the airline industry.</p>
      <p>Also, in the latest years I’ve worked in agile methodologies, proud of being a member of excellence teams where I’m outstanding for my commitment, leadership, focus on objectives and global vision through different roles and technologies.</p>
      <p>When I'm not in front of a computer screen, I'm probably photographing some portraits or landscapes, thinking of some ideas to change the world, or crossing off another item from my bucket list.</p>
      <p>Would you like to know more? You can contact me and ask what you need to know. <strong><a className="underline-link" href="https://www.paypal.me/ivanolivaresrojas/4" rel="noopener" title="Buy me a coffee!">You can also buy me coffee</a></strong> which is welcome :)</p>
      <a className="arrow-link" href="/resume.pdf" rel="noopener" target="_blank">View My Resume</a>
    </div>
  </section>