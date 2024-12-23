import '@Styles/body.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

function Body() {
  const [Input_value, setInput_value] = useState('');
  const navigator = useNavigate();

  const InputHandling = () => {
    if (!Input_value) {
      console.log('Please enter a link');
    }
     else {
      handleNavigation();
    }
  };

  const handleNavigation = () => {
    navigator('/ViewQRcode');
  };
const SendData = ()=>{
// fetch(` http://localhost:3500/requestlink?value=${encodeURIComponent(Input_value)}`)
fetch(`dev-challenge1-apiapiapiapi.vercel.app/requestlink?value=${encodeURIComponent(Input_value)}`)
.then(response => {
  response.json()
  console.log('URL sent Succesfuly')
}
)
.catch(error=>{
  console.error(`failed to send data \n ${error}`)
})

}


  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          InputHandling();
          SendData();
        }}
        id="Form"
      >
        <div className="Form-input-container">
          <div className="Label-container">
            <label htmlFor="QRcodeLink">
            <svg width="150" height="32" viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.576577C0 0.258142 0.254955 0 0.569459 0H4.8404C5.1549 0 5.40986 0.258142 5.40986 0.576577V4.9009C5.40986 5.21934 5.1549 5.47748 4.8404 5.47748H0.569459C0.254955 5.47748 0 5.21934 0 4.9009V0.576577Z" fill="#3662E3"/>
<path d="M26.1951 0.576577C26.1951 0.258142 26.45 0 26.7645 0H31.0354C31.3499 0 31.6049 0.258142 31.6049 0.576577V4.9009C31.6049 5.21934 31.3499 5.47748 31.0354 5.47748H26.7645C26.45 5.47748 26.1951 5.21934 26.1951 4.9009V0.576577Z" fill="#3662E3"/>
<path d="M6.54883 7.20721C6.54883 6.88877 6.80379 6.63063 7.11829 6.63063H11.3892C11.7038 6.63063 11.9587 6.88877 11.9587 7.20721V11.5315C11.9587 11.85 11.7038 12.1081 11.3892 12.1081H7.11829C6.80379 12.1081 6.54883 11.85 6.54883 11.5315V7.20721Z" fill="#3662E3"/>
<path d="M19.6464 7.20721C19.6464 6.88877 19.9013 6.63063 20.2158 6.63063H24.4867C24.8012 6.63063 25.0562 6.88877 25.0562 7.20721V11.5315C25.0562 11.85 24.8012 12.1081 24.4867 12.1081H20.2158C19.9013 12.1081 19.6464 11.85 19.6464 11.5315V7.20721Z" fill="#3662E3"/>
<path d="M6.54883 13.8378C6.54883 13.5194 6.80379 13.2613 7.11829 13.2613H11.3892C11.7038 13.2613 11.9587 13.5194 11.9587 13.8378V18.1622C11.9587 18.4806 11.7038 18.7387 11.3892 18.7387H7.11829C6.80379 18.7387 6.54883 18.4806 6.54883 18.1622V13.8378Z" fill="#3662E3"/>
<path d="M13.0975 13.8378C13.0975 13.5194 13.3525 13.2613 13.667 13.2613H17.9379C18.2524 13.2613 18.5074 13.5194 18.5074 13.8378V18.1622C18.5074 18.4806 18.2524 18.7387 17.9379 18.7387H13.667C13.3525 18.7387 13.0975 18.4806 13.0975 18.1622V13.8378Z" fill="#3662E3"/>
<path d="M0 20.4685C0 20.15 0.254955 19.8919 0.569459 19.8919H4.8404C5.1549 19.8919 5.40986 20.15 5.40986 20.4685V24.7928C5.40986 25.1112 5.1549 25.3694 4.8404 25.3694H0.569459C0.254955 25.3694 0 25.1112 0 24.7928V20.4685Z" fill="#3662E3"/>
<path d="M13.0975 20.4685C13.0975 20.15 13.3525 19.8919 13.667 19.8919H17.9379C18.2524 19.8919 18.5074 20.15 18.5074 20.4685V24.7928C18.5074 25.1112 18.2524 25.3694 17.9379 25.3694H13.667C13.3525 25.3694 13.0975 25.1112 13.0975 24.7928V20.4685Z" fill="#3662E3"/>
<path d="M19.6464 20.4685C19.6464 20.15 19.9013 19.8919 20.2158 19.8919H24.4867C24.8012 19.8919 25.0562 20.15 25.0562 20.4685V24.7928C25.0562 25.1112 24.8012 25.3694 24.4867 25.3694H20.2158C19.9013 25.3694 19.6464 25.1112 19.6464 24.7928V20.4685Z" fill="#3662E3"/>
<path d="M6.54883 27.0991C6.54883 26.7806 6.80379 26.5226 7.11829 26.5226H11.3892C11.7038 26.5226 11.9587 26.7806 11.9587 27.0991V31.4234C11.9587 31.7418 11.7038 32 11.3892 32H7.11829C6.80379 32 6.54883 31.7418 6.54883 31.4234V27.0991Z" fill="#3662E3"/>
<path d="M19.6464 27.0991C19.6464 26.7806 19.9013 26.5226 20.2158 26.5226H24.4867C24.8012 26.5226 25.0562 26.7806 25.0562 27.0991V31.4234C25.0562 31.7418 24.8012 32 24.4867 32H20.2158C19.9013 32 19.6464 31.7418 19.6464 31.4234V27.0991Z" fill="#3662E3"/>
<path d="M26.1951 27.0991C26.1951 26.7806 26.45 26.5226 26.7645 26.5226H31.0354C31.3499 26.5226 31.6049 26.7806 31.6049 27.0991V31.4234C31.6049 31.7418 31.3499 32 31.0354 32H26.7645C26.45 32 26.1951 31.7418 26.1951 31.4234V27.0991Z" fill="#3662E3"/>
<path d="M54.3624 25.856C53.0982 25.856 51.9183 25.617 50.8227 25.1392C49.727 24.6614 48.7662 24.0042 47.9403 23.168C47.1143 22.3146 46.4654 21.3334 45.9935 20.224C45.5383 19.0976 45.3108 17.8944 45.3108 16.6144C45.3108 15.3344 45.5383 14.1398 45.9935 13.0304C46.4654 11.921 47.1059 10.9482 47.915 10.112C48.741 9.25864 49.6933 8.6016 50.7721 8.1408C51.8677 7.66293 53.0477 7.424 54.3119 7.424C55.5761 7.424 56.7475 7.66293 57.8263 8.1408C58.9219 8.6016 59.8827 9.25864 60.7087 10.112C61.5346 10.9482 62.1752 11.9296 62.6303 13.056C63.1022 14.1654 63.3382 15.36 63.3382 16.64C63.3382 17.92 63.1022 19.1232 62.6303 20.2496C62.1752 21.359 61.5346 22.3318 60.7087 23.168C59.8996 24.0042 58.9472 24.6614 57.8516 25.1392C56.7728 25.617 55.6097 25.856 54.3624 25.856ZM54.3119 23.04C55.5086 23.04 56.5537 22.767 57.4471 22.2208C58.3573 21.6746 59.0653 20.9238 59.5709 19.968C60.0934 18.9952 60.3547 17.8774 60.3547 16.6144C60.3547 15.6758 60.203 14.8224 59.8996 14.0544C59.6131 13.2694 59.2001 12.5952 58.6607 12.032C58.1213 11.4518 57.4807 11.008 56.7391 10.7008C56.0143 10.3936 55.2052 10.24 54.3119 10.24C53.1319 10.24 52.0869 10.513 51.1767 11.0592C50.2833 11.5882 49.5753 12.3306 49.0528 13.2864C48.5471 14.2422 48.2943 15.3514 48.2943 16.6144C48.2943 17.553 48.4375 18.4234 48.7241 19.2256C49.0275 20.0106 49.4405 20.6848 49.963 21.248C50.5024 21.8112 51.1429 22.255 51.8846 22.5792C52.6262 22.8864 53.4353 23.04 54.3119 23.04ZM62.4533 26.8288L54.4889 18.7648L56.3599 16.8704L64.3243 24.9344L62.4533 26.8288ZM68.6811 17.9968V15.5648H73.1563C74.0496 15.5648 74.7408 15.3344 75.2296 14.8736C75.7353 14.3958 75.9881 13.7386 75.9881 12.9024C75.9881 12.1514 75.7437 11.52 75.2549 11.008C74.766 10.496 74.0749 10.24 73.1816 10.24H68.6811V7.68H73.308C74.4205 7.68 75.3981 7.9104 76.241 8.3712C77.0837 8.81496 77.7327 9.42936 78.1878 10.2144C78.6598 10.9824 78.8958 11.8614 78.8958 12.8512C78.8958 13.8922 78.6598 14.7968 78.1878 15.5648C77.7327 16.3328 77.0837 16.9302 76.241 17.3568C75.3981 17.7834 74.4205 17.9968 73.308 17.9968H68.6811ZM66.6836 25.6V7.68H69.5913V25.6H66.6836ZM76.3927 25.6L70.1981 17.8176L72.9035 16.8192L80.0585 25.6H76.3927ZM89.7794 25.856C88.4986 25.856 87.3103 25.6256 86.2144 25.1648C85.1359 24.687 84.1917 24.0298 83.3826 23.1936C82.5735 22.3402 81.9501 21.359 81.5116 20.2496C81.0738 19.1232 80.8542 17.92 80.8542 16.64C80.8542 15.36 81.0738 14.1654 81.5116 13.056C81.9501 11.9296 82.5735 10.9482 83.3826 10.112C84.1917 9.27576 85.1359 8.61864 86.2144 8.1408C87.3103 7.66293 88.4986 7.424 89.7794 7.424C91.2127 7.424 92.4516 7.66293 93.4962 8.1408C94.5415 8.61864 95.4683 9.2672 96.2774 10.0864L94.3052 12.0832C93.783 11.503 93.1422 11.0506 92.3837 10.7264C91.6425 10.4022 90.7742 10.24 89.7794 10.24C88.9032 10.24 88.1028 10.3936 87.3774 10.7008C86.6529 11.008 86.0208 11.4518 85.4811 12.032C84.9589 12.5952 84.5543 13.2694 84.2675 14.0544C83.9815 14.8394 83.8377 15.7014 83.8377 16.64C83.8377 17.5786 83.9815 18.4406 84.2675 19.2256C84.5543 20.0106 84.9589 20.6934 85.4811 21.2736C86.0208 21.8368 86.6529 22.272 87.3774 22.5792C88.1028 22.8864 88.9032 23.04 89.7794 23.04C90.8587 23.04 91.7689 22.8778 92.5101 22.5536C93.2686 22.2122 93.9094 21.7514 94.4317 21.1712L96.4038 23.168C95.5947 24.0042 94.6426 24.6614 93.5467 25.1392C92.4516 25.617 91.1953 25.856 89.7794 25.856ZM106.171 25.856C104.907 25.856 103.727 25.617 102.632 25.1392C101.536 24.6614 100.575 24.0042 99.7492 23.168C98.9235 22.3146 98.274 21.3334 97.8023 20.224C97.3472 19.0976 97.1197 17.8944 97.1197 16.6144C97.1197 15.3344 97.3472 14.1398 97.8023 13.0304C98.274 11.921 98.9148 10.9482 99.7239 10.112C100.55 9.25864 101.502 8.6016 102.581 8.1408C103.677 7.66293 104.857 7.424 106.121 7.424C107.385 7.424 108.557 7.66293 109.635 8.1408C110.731 8.6016 111.692 9.25864 112.518 10.112C113.343 10.9482 113.984 11.9296 114.439 13.056C114.911 14.1654 115.147 15.36 115.147 16.64C115.147 17.92 114.911 19.1232 114.439 20.2496C113.984 21.359 113.343 22.3318 112.518 23.168C111.708 24.0042 110.756 24.6614 109.66 25.1392C108.582 25.617 107.419 25.856 106.171 25.856ZM106.121 23.04C107.318 23.04 108.362 22.767 109.256 22.2208C110.166 21.6746 110.874 20.9238 111.38 19.968C111.902 18.9952 112.164 17.8774 112.164 16.6144C112.164 15.6758 112.012 14.8224 111.708 14.0544C111.422 13.2694 111.009 12.5952 110.47 12.032C109.93 11.4518 109.29 11.008 108.548 10.7008C107.823 10.3936 107.014 10.24 106.121 10.24C104.941 10.24 103.896 10.513 102.986 11.0592C102.092 11.5882 101.384 12.3306 100.862 13.2864C100.356 14.2422 100.103 15.3514 100.103 16.6144C100.103 17.553 100.246 18.4234 100.533 19.2256C100.836 20.0106 101.25 20.6848 101.772 21.248C102.312 21.8112 102.952 22.255 103.693 22.5792C104.435 22.8864 105.245 23.04 106.121 23.04ZM119.848 25.6V22.912H124.501C125.714 22.912 126.776 22.6474 127.686 22.1184C128.613 21.5894 129.33 20.8554 129.836 19.9168C130.358 18.961 130.619 17.8602 130.619 16.6144C130.619 15.3856 130.358 14.3018 129.836 13.3632C129.313 12.4246 128.588 11.6906 127.661 11.1616C126.751 10.6326 125.698 10.368 124.501 10.368H119.848V7.68H124.576C125.857 7.68 127.046 7.9104 128.141 8.3712C129.237 8.81496 130.189 9.4464 130.999 10.2656C131.824 11.0678 132.465 12.015 132.92 13.1072C133.375 14.1824 133.603 15.36 133.603 16.64C133.603 17.903 133.375 19.0806 132.92 20.1728C132.465 21.265 131.833 22.2208 131.024 23.04C130.215 23.8422 129.263 24.4736 128.167 24.9344C127.071 25.3782 125.891 25.6 124.627 25.6H119.848ZM117.851 25.6V7.68H120.759V25.6H117.851ZM136.315 25.6V7.68H139.222V25.6H136.315ZM138.312 25.6V22.912H148.223V25.6H138.312ZM138.312 17.7408V15.1552H147.364V17.7408H138.312ZM138.312 10.368V7.68H148.097V10.368H138.312Z" fill="#3662E3"/>
</svg>
     
            </label>
          </div>
          <div className="input-button-container">
         <input type="text" className="QRcodeLink" id="QRcodeLink"placeholder="Enter an URL"value={Input_value}onChange={(e)=> setInput_value(e.target.value)}/>
         <button className="CreateQRCode-btn" id="CreateQRCode-btn">QR code</button>
         </div>
        </div>
       

      </form>
    </>
  );
}

export default Body;
