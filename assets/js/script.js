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
}

const fadeInRight = {
  delay: 200,
  distance: '70px',
  duration: 800,
  easing: 'ease-in-out',
  interval: 150,
  opacity: 0,
  origin: 'right',
}

const fadeInLeft = {
  delay: 200,
  distance: '70px',
  duration: 800,
  easing: 'ease-in-out',
  interval: 150,
  opacity: 0,
  origin: 'left',
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

const $players = document.querySelectorAll('[data-player-aminations]')

if ($players){
  ScrollReveal().reveal($players, fadeInUp);
}

const $members = document.querySelector('[data-members-animations]')

if ($members){
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

const $musicPlayers = document.querySelectorAll('[data-player]')

const musicPlay = (player)=>{
  const $play = player.querySelector('[data-play]')
  const $progressBar = player.querySelector('[data-progress-bar]')
  const $progressBarCurrent = player.querySelector('[data-progress-current]')
  const $audio = player.querySelector('[data-audio]')

  const playSong = () => {
    player.classList.add('play')
    $play.querySelector('i').classList.remove('ri-play-mini-fill')
    $play.querySelector('i').classList.add('ri-pause-mini-fill')

    $audio.play()
  }

  const pauseSong = () => {
    player.classList.remove('play')
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

  $play.addEventListener('click', ()=>{
    const isPlaying = player.classList.contains('play')

    if (isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })

  $audio.addEventListener('timeupdate', updateProgress)

  $progressBar.addEventListener('click', setProgressPosition)

  $audio.addEventListener('ended', pauseSong)
}

if ( $musicPlayers.length ) {
  $musicPlayers.forEach((player) => {
    musicPlay(player)
  })
}