export default function Home () {
  return (
    <div id='page' class='site'>
      <header id='masthead' class='site-header' role='banner'>
        <div class='site-branding'>
          <a href='https://www.parkviewlincoln.com/' rel='home'>
            <img
              alt='Parkview Apartments'
              src='/images/logos/Parkview-Apartments-logo-300x168.png'
              width='300'
              height='168'
            />
          </a>
        </div>
        <nav id='site-navigation' class='main-navigation' role='navigation'>
          <button
            class='menu-toggle fa'
            aria-controls='primary-menu'
            aria-expanded='false'
            aria-label='Menu'
          ></button>
          <div class='menu-top-container'>
            <ul
              id='primary-menu'
              class='menu chars-60-69 nav-menu'
              aria-expanded='false'
            >
              <li
                id='menu-item-26'
                class='menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-26'
              >
                <a href='#floorplans' aria-label='Floor Plans'>
                  Floor Plans
                </a>
              </li>
              <li
                id='menu-item-27'
                class='menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-27'
              >
                <a href='#photos' aria-label='Photos'>
                  Photos
                </a>
              </li>
              <li
                id='menu-item-28'
                class='menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-28'
              >
                <a href='#map' aria-label='Map'>
                  Map
                </a>
              </li>
              <li
                id='menu-item-589'
                class='menu-item menu-item-type-post_type menu-item-object-page menu-item-589'
              >
                <a href='./application.html' aria-label='Apply Now'>
                  Apply Now
                </a>
              </li>
              <li
                id='menu-item-29'
                class='phone menu-item menu-item-type-custom menu-item-object-custom menu-item-29'
              >
                <a href='tel:402-617-1740' aria-label='(402) 617-1740'>
                  (402) 617-1740
                </a>
              </li>
              <li
                id='menu-item-595'
                class='button_solid_color menu-item menu-item-type-post_type menu-item-object-page menu-item-595'
              >
                <a href='./application.html' aria-label='Check Availability'>
                  Check Availability
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}
