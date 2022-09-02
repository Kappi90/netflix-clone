import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const MyFooter = () => {
  return (
    <footer>
      <div className='row text-center mt-5'>
        <div className='col-6 offset-3'>
          <div className='row'>
            <div className='col col-12 text-center mb-3'>
              <FontAwesomeIcon
                className='icons'
                icon={faFacebook}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className='icons'
                icon={faInstagram}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className='icons'
                icon={faTwitter}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className='icons'
                icon={faYoutube}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4'>
            <div className='col'>
              <div className='row'>
                <div className='col col-12 footer-links'>
                  <p>
                    <a href='#audio' alt='footer link'>
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href='#media' alt='footer link'>
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href='#privacy' alt='footer link'>
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href='#contacus' alt='footer link'>
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col col-12 footer-links'>
                  <p>
                    <a href='#audiodescription' alt='footer link'>
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href='#inestor' alt='footer link'>
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href='#legal' alt='footer link'>
                      Legal Notices
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col col-12 footer-links'>
                  <p>
                    <a href='#help' alt='footer link'>
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href='#jobs' alt='footer link'>
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href='#cookie' alt='footer link'>
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col col-12 footer-links'>
                  <p>
                    <a href='#git' alt='footer link'>
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href='#terms' alt='footer link'>
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href='#corporate' alt='footer link'>
                      Corporate Information
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col col-12 text-left mb-2'>
              <button
                type='button'
                className='btn btn-sm footer-button rounded-0 mt-3'
                style={{ color: "#838383", borderColor: "#838383" }}
              >
                Service Code
              </button>
            </div>
          </div>
          <div className='row'>
            <div
              className='col col-12 text-left mb-2 mt-2 copyright'
              style={{ color: "#838383" }}
            >
              © 1997-2022 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
