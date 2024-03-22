const Cta = () => {
  return (
    <div id='showcase_main'>
      <div
        id='showcase'
        class='splide splide--fade splide--ltr splide--draggable is-active is-overflow is-initialized'
        role='region'
        aria-roledescription='carousel'
      >
        <div
          class='splide__track splide__track--fade splide__track--ltr splide__track--draggable'
          id='showcase-track'
          style={{ 'padding-left': '0px', 'padding-right': '0px' }}
          aria-live='polite'
          aria-atomic='true'
        >
          <div class='splide__list' id='showcase-list' role='presentation'>
            <div
              class='slide splide__slide is-active is-visible'
              id='showcase-slide01'
              role='group'
              aria-roledescription='slide'
              aria-label='1 of 1'
              style={{
                width: 'calc(100%)',
                transform: 'translateX(0%)',
                top: '0px'
              }}
            >
              <img
                width='1600'
                height='700'
                src='/images/photos/slide.jpg'
                class='attachment-full size-full entered lazyloaded'
                alt='Parkview Apartments slide'
              />
              <noscript>
                <img
                  width='1600'
                  height='700'
                  src='/images/photos/slide.jpg'
                  class='attachment-full size-full'
                  alt='Parkview Apartments slide'
                />
              </noscript>
            </div>
          </div>
        </div>
      </div>
      <div class='slider_overlay' style={{ opacity: '1' }}>
        <div class='name'>
          <img
            width='300'
            height='168'
            src='/images/logos/Parkview-Apartments-logo-300x168.png'
            class='attachment-medium size-medium entered lazyloaded'
            alt='Parkview Apartments logo'
          />
          <noscript>
            <img
              width='300'
              height='168'
              src='/images/logos/Parkview-Apartments-logo-300x168.png'
              class='attachment-medium size-medium'
              alt='Parkview Apartments logo'
            />
          </noscript>
        </div>
        <h2 class='location'>Inviting Community in Lincoln, NE</h2>
      </div>
    </div>
  )
}

export default Cta
