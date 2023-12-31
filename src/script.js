// icons
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

const usertheme= localStorage.getItem('theme');
const systemTheme= window.matchMedia('(prefers-color-scheme:dark)').matches

const iconToggle = () =>{
    moonIcon.classList.toggle('display-none')
    sunIcon.classList.toggle('display-none')
}

const themeCheck=()=>{
     if (usertheme === dark || (!usertheme && systemTheme)){
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('display-none')
        return;
     }sunIcon.classList.add('display-none');
};

const themeSwitch =()=>{
    if (document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme','light')
        iconToggle();
        return;
    }
document.documentElement.classList.add('dark')
localStorage.setItem('theme','dark')
iconToggle();
}

sunIcon.addEventListener('click',() =>{
    themeSwitch();
});
moonIcon.addEventListener('click',() =>{
    themeSwitch();
});

themeCheck();



//video autoplay

//   const video = document.getElementById('video')
//   video.addEventListener('mouseenter', () => {
//     video.play();
//   });
//   video.addEventListener('mouseleave',() => {
//     video.onpause
//   } )

const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});


