import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="nav-button">
        Shamazon.com
      </Link>
      <div className="search-bar">
        <div className="search-dropdown">
          <p>All</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
          >
            <path
              d="M2.4375 0L0 1.90909L6.5 7L13 1.90909L10.5625 0L6.5 3.18182L2.4375 0Z"
              fill="#424242"
            />
          </svg>
        </div>
        <p>Search Shamazon.com</p>
        <div className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="46"
            viewBox="0 0 62 46"
            fill="none"
          >
            <rect width="62" height="100%" fill="#FFA726" />
            <path
              d="M28.4408 7.03964C21.0292 7.03964 15 13.2633 15 20.914C15 28.5648 21.0292 34.7884 28.4408 34.7884C30.7066 34.7884 32.9339 34.2334 34.8156 33.1631C34.9663 33.3504 35.1334 33.5229 35.3148 33.6785L39.1551 37.6426C39.5097 38.0545 39.9421 38.3872 40.4257 38.6203C40.9094 38.8534 41.4341 38.982 41.9677 38.9983C42.5013 39.0145 43.0324 38.9179 43.5285 38.7146C44.0247 38.5112 44.4753 38.2053 44.8527 37.8157C45.2302 37.4261 45.5265 36.9609 45.7235 36.4488C45.9205 35.9367 46.014 35.3884 45.9983 34.8376C45.9826 34.2869 45.858 33.7452 45.6322 33.2459C45.4063 32.7467 45.084 32.3003 44.685 31.9343L40.8448 27.9702C40.6577 27.777 40.4518 27.6043 40.2303 27.4548C41.2672 25.5124 41.92 23.2529 41.92 20.8744C41.92 13.2237 35.8909 7 28.4792 7L28.4408 7.03964ZM28.4408 11.0038C33.7787 11.0038 38.0414 15.4039 38.0414 20.914C38.0414 23.5303 37.1197 25.9485 35.5068 27.7323C35.4684 27.7719 35.43 27.8116 35.3916 27.8512C35.2103 28.0068 35.0431 28.1793 34.8924 28.3666C33.2027 29.9522 30.8986 30.864 28.4024 30.864C23.0645 30.864 18.8018 26.4638 18.8018 20.9537C18.8018 15.4436 23.0645 11.0434 28.4024 11.0434L28.4408 11.0038Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="language">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="18"
          viewBox="0 0 21 18"
          fill="none"
        >
          <path d="M5.24927 0H15.7507V17.8207H5.24927V0Z" fill="white" />
          <path
            d="M0 0H5.24928V17.8207H0V0ZM15.7507 0H21V17.8207H15.7536L15.7507 0ZM6.82319 8.611L6.41159 8.77807L8.31015 10.7794C8.45507 11.2911 8.26087 11.4407 8.13623 11.7122L10.1942 11.399L10.1449 13.8876L10.5739 13.8737L10.4783 11.4024L12.542 11.6983C12.4145 11.3746 12.3014 11.204 12.4174 10.6889L14.313 8.79199L13.9826 8.64581C13.7101 8.3952 14.0986 7.43804 14.1565 6.83241C14.1565 6.83241 13.0522 7.28837 12.9797 7.04821L12.6957 6.39734L11.6899 7.72693C11.5797 7.75825 11.5333 7.70604 11.5072 7.59467L11.971 4.81715L11.2348 5.31487C11.1739 5.34968 11.113 5.32183 11.0725 5.23482L10.3623 3.52933L9.63188 5.30095C9.57681 5.3636 9.52174 5.37056 9.47536 5.3288L8.77391 4.85543L9.1971 7.60859C9.16232 7.71997 9.08116 7.74781 8.98841 7.68864L8.02319 6.37646C7.89855 6.6201 7.81449 7.01341 7.64638 7.1039C7.48116 7.18744 6.92174 6.93683 6.54783 6.83938C6.67536 7.39279 7.07536 8.31167 6.82319 8.61448V8.611Z"
            fill="#D52B1E"
          />
        </svg>
        <p>EN</p>
      </div>
      <div className="account">
        <p>Hello, User</p>
        <p id="account-text">Account & Lists</p>
      </div>
      <Link to="/cart" className="cart-button">
        <p>Cart</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="38"
          viewBox="0 0 40 38"
          fill="none"
        >
          <path
            d="M1.33332 7.48816C0.596659 7.48816 0 8.0471 0 8.73719V9.98623C0 10.5733 0.436661 11.0635 1.01999 11.1978C1.11999 11.2197 1.22665 11.2353 1.33332 11.2353H2.66997C2.66997 11.3227 5.83326 26.4891 5.83326 26.4891C5.95326 27.0637 6.44992 27.4758 7.02657 27.4758H28.0196L31.4196 11.2353H32.9096V11.1978L33.3296 9.98623V7.48816H1.33332Z"
            fill="url(#paint0_linear_152_638)"
          />
          <path
            d="M0 9.98621C0 10.5733 0.436661 11.0635 1.01999 11.1978H32.9129L33.3329 9.98621H0Z"
            fill="#F57C00"
          />
          <path
            d="M5.51323 13.8707L7.8832 23.8661C7.94987 24.1534 8.21986 24.3564 8.53319 24.3564H9.99984C10.3665 24.3564 10.6665 24.0753 10.6665 23.7319V13.7365C10.6665 13.393 10.3665 13.1119 9.99984 13.1119H6.16322C5.73656 13.1119 5.4199 13.4804 5.51323 13.8707Z"
            fill="#F57C00"
          />
          <path
            d="M26.4863 13.8707L24.1163 23.8661C24.0496 24.1534 23.7796 24.3564 23.4663 24.3564H21.9997C21.633 24.3564 21.333 24.0753 21.333 23.7319V13.7365C21.333 13.393 21.633 13.1119 21.9997 13.1119H25.8363C26.2596 13.1119 26.5796 13.4804 26.4863 13.8707Z"
            fill="#F57C00"
          />
          <path
            d="M14.0766 13.1119H17.9198C18.3165 13.1119 18.6265 13.4367 18.5832 13.8052L17.3998 23.7974C17.3632 24.1128 17.0765 24.3533 16.7365 24.3533H15.2632C14.9232 24.3533 14.6365 24.1128 14.5999 23.7974L13.4132 13.802C13.3699 13.4336 13.6799 13.1119 14.0766 13.1119Z"
            fill="#F57C00"
          />
          <path
            opacity="0.2"
            d="M32.3329 8.42494V9.83947L32.1729 10.3016H31.4229C30.9463 10.3016 30.5329 10.6201 30.4429 11.0573L27.1996 26.5422H7.02657C6.94658 26.5422 6.84324 26.4548 6.81324 26.3111C5.96659 22.2549 3.76328 11.6849 3.65662 11.1104C3.58995 10.6513 3.17329 10.3016 2.66663 10.3016H1.33332C1.32665 10.3016 1.30332 10.3016 1.25665 10.2891C1.13332 10.261 0.999987 10.1548 0.999987 9.98623V8.73719C0.999987 8.56545 1.14998 8.42494 1.33332 8.42494H32.3329ZM33.3329 7.48816H1.33332C0.596659 7.48816 0 8.0471 0 8.73719V9.98623C0 10.5733 0.436661 11.0635 1.01999 11.1978C1.11999 11.2197 1.22665 11.2353 1.33332 11.2353H2.66997C2.66997 11.3227 5.83326 26.4891 5.83326 26.4891C5.95326 27.0637 6.44992 27.4758 7.02657 27.4758H28.0196L31.4229 11.2353H32.9129V11.1978L33.3329 9.98623V7.48816Z"
            fill="#424242"
          />
          <path
            opacity="0.2"
            d="M9.99984 13.7365V23.7319H8.53319L6.16322 13.7365H9.99984ZM9.99984 13.1119H6.16322C5.73656 13.1119 5.4199 13.4835 5.51323 13.8707L7.8832 23.8661C7.94987 24.1534 8.21986 24.3564 8.53319 24.3564H9.99984C10.3665 24.3564 10.6665 24.0753 10.6665 23.7319V13.7365C10.6665 13.3898 10.3665 13.1119 9.99984 13.1119Z"
            fill="#424242"
          />
          <path
            opacity="0.2"
            d="M25.8363 13.7365L23.4663 23.7319H21.9997V13.7365H25.8363ZM25.8363 13.1119H21.9997C21.633 13.1119 21.333 13.393 21.333 13.7365V23.7319C21.333 24.0753 21.633 24.3564 21.9997 24.3564H23.4663C23.7796 24.3564 24.0496 24.1534 24.1163 23.8661L26.4863 13.8707C26.5796 13.4804 26.2596 13.1119 25.8363 13.1119Z"
            fill="#424242"
          />
          <path
            opacity="0.2"
            d="M17.9198 13.7365L16.7332 23.7319H15.2599L14.0732 13.7365H17.9198ZM17.9198 13.1119H14.0766C13.6799 13.1119 13.3699 13.4367 13.4132 13.8052L14.5999 23.8006C14.6365 24.1159 14.9232 24.3564 15.2632 24.3564H16.7365C17.0765 24.3564 17.3632 24.1159 17.3998 23.8006L18.5865 13.8052C18.6265 13.4336 18.3198 13.1119 17.9198 13.1119Z"
            fill="#424242"
          />
          <path
            d="M34.8428 1.12123C34.0561 1.36791 33.4461 1.95808 33.2095 2.70125L25.3896 27.1199C25.2929 27.4259 25.3229 27.7538 25.4729 28.0379L26.6929 30.3237C26.9162 30.739 26.5929 31.2292 26.0962 31.2292H2.66654C1.88655 31.2292 1.26322 31.8569 1.33989 32.6C1.40655 33.2495 2.02654 33.7273 2.7232 33.7273H29.2829C29.6062 33.7273 29.9328 33.6367 30.1828 33.4431C30.6762 33.0559 30.7962 32.4252 30.5262 31.9193L28.6429 28.3939C28.2895 27.735 28.2195 26.9731 28.4462 26.2674L35.6428 3.78792C35.6928 3.62554 35.8128 3.49751 35.9694 3.41945L34.8628 1.1181L34.8428 1.12123Z"
            fill="url(#paint1_linear_152_638)"
          />
          <path
            d="M39.8161 0.609098C39.4995 0.0907486 38.8162 -0.121587 38.2128 0.0688904L34.8662 1.11496L35.9729 3.4163C36.0062 3.40069 36.0362 3.38196 36.0729 3.37259L39.0862 2.42957C39.8728 2.18288 40.2528 1.32105 39.8161 0.609098Z"
            fill="#F57C00"
          />
          <path
            opacity="0.2"
            d="M38.6561 0.624701C38.9027 0.624701 39.1261 0.737114 39.2361 0.918224C39.3794 1.15242 39.3294 1.35851 39.2861 1.46468C39.2127 1.63954 39.0627 1.77694 38.8727 1.83626L35.8594 2.77929C35.7728 2.80739 35.7094 2.83862 35.6561 2.86672C35.3361 3.02597 35.1061 3.28827 35.0028 3.60677L27.8095 26.0832C27.5329 26.945 27.6195 27.863 28.0462 28.6687L29.9295 32.1941C30.0695 32.4532 29.9962 32.7686 29.7528 32.9591C29.6395 33.0496 29.4695 33.0996 29.2829 33.0996H2.7232C2.34987 33.0996 2.03321 32.8529 2.00321 32.5375C1.98321 32.3564 2.04654 32.1847 2.17321 32.0535C2.29987 31.9224 2.47654 31.8506 2.66654 31.8506H26.0962C26.5629 31.8506 26.9862 31.6289 27.2295 31.2573C27.4729 30.8857 27.4962 30.4329 27.2895 30.0426L26.0696 27.7569C25.9929 27.6132 25.9796 27.4508 26.0262 27.2978L33.8461 2.87921C34.0228 2.32963 34.4728 1.89559 35.0528 1.71448L35.0728 1.70824L38.4194 0.662172C38.4994 0.637191 38.5761 0.624701 38.6561 0.624701ZM38.6561 0.000183105C38.5061 0.000183105 38.3561 0.0220412 38.2094 0.06888L34.8628 1.11495L34.8428 1.12119C34.0561 1.36788 33.4461 1.95805 33.2095 2.70122L25.3896 27.1199C25.2929 27.4259 25.3229 27.7537 25.4729 28.0379L26.6929 30.3236C26.9162 30.7389 26.5929 31.2292 26.0962 31.2292H2.66654C1.88655 31.2292 1.26322 31.8568 1.33989 32.6C1.40655 33.2495 2.02654 33.7273 2.7232 33.7273H29.2829C29.6062 33.7273 29.9328 33.6367 30.1828 33.4431C30.6762 33.0559 30.7962 32.4251 30.5262 31.9193L28.6429 28.3939C28.2895 27.735 28.2195 26.9731 28.4462 26.2674L35.6428 3.78788C35.6928 3.62551 35.8128 3.49748 35.9694 3.41942C36.0028 3.4038 36.0328 3.38507 36.0694 3.3757L39.0827 2.43268C39.866 2.18599 40.246 1.32416 39.8127 0.61221C39.576 0.215642 39.1261 0.000183105 38.6561 0.000183105Z"
            fill="#424242"
          />
          <path
            d="M7.99988 37.4712C9.47262 37.4712 10.6665 36.3528 10.6665 34.9732C10.6665 33.5935 9.47262 32.4751 7.99988 32.4751C6.52714 32.4751 5.33325 33.5935 5.33325 34.9732C5.33325 36.3528 6.52714 37.4712 7.99988 37.4712Z"
            fill="#37474F"
          />
          <path
            d="M25.3331 37.4712C26.8059 37.4712 27.9998 36.3528 27.9998 34.9732C27.9998 33.5935 26.8059 32.4751 25.3331 32.4751C23.8604 32.4751 22.6665 33.5935 22.6665 34.9732C22.6665 36.3528 23.8604 37.4712 25.3331 37.4712Z"
            fill="#37474F"
          />
          <path
            d="M8.66648 36.2222H7.33316C6.9665 36.2222 6.6665 35.9412 6.6665 35.5977V32.4751H9.33314V35.5977C9.33314 35.9412 9.03314 36.2222 8.66648 36.2222Z"
            fill="#B0BEC5"
          />
          <path
            d="M7.99991 34.9732C8.36809 34.9732 8.66657 34.6936 8.66657 34.3486C8.66657 34.0037 8.36809 33.7241 7.99991 33.7241C7.63172 33.7241 7.33325 34.0037 7.33325 34.3486C7.33325 34.6936 7.63172 34.9732 7.99991 34.9732Z"
            fill="#FAFAFA"
            stroke="#757575"
            stroke-width="0.779001"
            stroke-miterlimit="10"
          />
          <path
            d="M25.9997 36.2222H24.6664C24.2998 36.2222 23.9998 35.9412 23.9998 35.5977V32.4751H26.6664V35.5977C26.6664 35.9412 26.3664 36.2222 25.9997 36.2222Z"
            fill="#B0BEC5"
          />
          <path
            d="M25.3329 34.9732C25.7011 34.9732 25.9996 34.6936 25.9996 34.3486C25.9996 34.0037 25.7011 33.7241 25.3329 33.7241C24.9647 33.7241 24.6663 34.0037 24.6663 34.3486C24.6663 34.6936 24.9647 34.9732 25.3329 34.9732Z"
            fill="#FAFAFA"
            stroke="#757575"
            stroke-width="0.779001"
            stroke-miterlimit="10"
          />
          <defs>
            <linearGradient
              id="paint0_linear_152_638"
              x1="16.6661"
              y1="6.98261"
              x2="16.6661"
              y2="29.2189"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFA726" />
              <stop offset="1" stop-color="#FB8C00" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_152_638"
              x1="18.6523"
              y1="-4.81107"
              x2="18.6523"
              y2="39.0482"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#90A4AE" />
              <stop offset="1" stop-color="#607D8B" />
            </linearGradient>
          </defs>
        </svg>
      </Link>
    </div>
  );
};

export default Nav;