"use client";
export default function ErrorPage({reset}: {reset:()=>void}) { return <main id="main" className="narrow-page"><span className="eyebrow">LIBRARY UNAVAILABLE</span><h1>We couldn’t load the library.</h1><p>The content service is temporarily unavailable. Please try again.</p><button onClick={reset} className="button button-dark">Try again</button></main>; }
