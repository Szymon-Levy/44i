/*----------------------------------*\
  #ANIMATIONS
\*----------------------------------*/

/**
 * Animations definitions
  */

const fadeInUp = {
  delay: 200,
  distance: '70px',
  duration: 800,
  easing: 'ease-in-out',
  interval: 150,
  opacity: 0,
  origin: 'bottom',
  reset: true
}

const fadeInRight = {
  delay: 200,
  distance: '70px',
  duration: 800,
  easing: 'ease-in-out',
  interval: 150,
  opacity: 0,
  origin: 'right',
  reset: true
}

const fadeInLeft = {
  delay: 200,
  distance: '70px',
  duration: 800,
  easing: 'ease-in-out',
  interval: 150,
  opacity: 0,
  origin: 'left',
  reset: true
}

/**
 * Animations triggers
  */

const $heroSection = document.querySelector('[data-hero-animations]')

if($heroSection){
  $logo = $heroSection.querySelector('.hero__logo')
  $supText = $heroSection.querySelector('.hero__sup-text')
  $title = $heroSection.querySelector('.hero__title')
  $button = $heroSection.querySelector('.btn')

  ScrollReveal().reveal([$logo, $supText], fadeInUp);
  ScrollReveal().reveal($title, fadeInRight);
  ScrollReveal().reveal($button, fadeInLeft);

}

const $player = document.querySelector('[data-player-aminations]')

if ($player){
  ScrollReveal().reveal($player, fadeInUp);
}

const $members = document.querySelector('[data-members-animations]')

if ($player){
  const $titles = $members.querySelectorAll('.section__title')
  const $membersRight = $members.querySelectorAll('.members__list--right li')
  const $membersLeft = $members.querySelectorAll('.members__list--left li')

  ScrollReveal().reveal($titles, fadeInUp);
  ScrollReveal().reveal($membersRight, fadeInRight);
  ScrollReveal().reveal($membersLeft, fadeInLeft);
}


/*----------------------------------*\
  #SCROLL TO PLAYER
\*----------------------------------*/

const $scrollToPlayerBtn = document.querySelector('[data-scroll-to-player]')

if ($scrollToPlayerBtn){
  const $player = document.querySelector('[data-player]')

  if ($player) {
    $scrollToPlayerBtn.addEventListener('click', () =>{
      let playerPosition = $player.offsetTop;
      window.scrollTo(0, playerPosition - 100)
    })
  }
}


/*----------------------------------*\
  #MUSIC PLAYER
\*----------------------------------*/

const $musicPlayer = document.querySelector('[data-player]')

if ($musicPlayer){
  const $play = $musicPlayer.querySelector('[data-play]')
  const $duration = $musicPlayer.querySelector('[data-duration]')
  const $progressBar = $musicPlayer.querySelector('[data-progress-bar]')
  const $progressBarCurrent = $musicPlayer.querySelector('[data-progress-current]')
  const $audio = $musicPlayer.querySelector('[data-audio]')

  const playSong = () => {
    $musicPlayer.classList.add('play')
    $play.querySelector('i').classList.remove('ri-play-mini-fill')
    $play.querySelector('i').classList.add('ri-pause-mini-fill')

    $audio.play()
  }

  const pauseSong = () => {
    $musicPlayer.classList.remove('play')
    $play.querySelector('i').classList.add('ri-play-mini-fill')
    $play.querySelector('i').classList.remove('ri-pause-mini-fill')

    $audio.pause()
  }

  const updateProgress = (e)=> {
    const duration = e.srcElement.duration
    const currentTime = e.srcElement.currentTime
    const progressPercent = (currentTime / duration) * 100
    $progressBarCurrent.style.width = `${progressPercent}%`
  }

  const setProgressPosition = function (e) {
    const width = this.getBoundingClientRect().width
    const clickX = e.offsetX
    const duration = $audio.duration

    $audio.currentTime = (clickX / width) * duration
  }

  // const setDuration = ()=> {
  //   const minutes = Math.floor($audio.duration / 60)
  //   let seconds = $audio.duration - minutes * 60
  //   seconds = Math.floor(seconds)
  //   $duration.textContent = `${minutes}:${seconds}`
  // }

  // setDuration()

  $play.addEventListener('click', ()=>{
    const isPlaying = $musicPlayer.classList.contains('play')

    if (isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })

  $audio.addEventListener('timeupdate', updateProgress)

  $progressBar.addEventListener('click', setProgressPosition)

}