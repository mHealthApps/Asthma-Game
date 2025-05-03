import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import TopBar from '../../components/TopBar';
import useOrientation from '../../hooks/useOrientation';
import Asthma_Action_Plan_33 from '../../assets/images/33_Asthma Action Plan.jpg';
import Asthma_First_Aid from '../../assets/images/Asthma_First_Aid.jpg';
import ReactGA from 'react-ga4';


const Resources = () => {
  // GA Resources pageview
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/resources', title: 'Page: Resources' });
  }, [])
  // useSendPageview('Resources Page');

  const orientation = useOrientation();

  return (
    <div className="asthma-background menu-module">
      <div className="asthma-red menu-navbar">
        <TopBar oneLine='Resources' orientation={orientation}/>
      </div>
      <div className='home-gray-container padding-5'>
        <div className='resources-content' style={{
          fontSize: window.innerHeight * 0.022,
        }}>
          <h5>Asthma Action Plan</h5>
          <img src={Asthma_Action_Plan_33} alt='Asthma Action Plan' width='90%' />

          <br/>
          <h5>Asthma First Aid</h5>
          <img src={Asthma_First_Aid} alt='Asthma First Aid' width='90%' />

          <br/>
          <h5>General</h5>
          <a href='https://www.lung.org/' target='_blank' rel="noreferrer">American Lung Assocition</a>
          <a href='https://www.cdc.gov/asthma/about/index.html' target='_blank' rel="noreferrer">Centers for Disease Control and Prevention- Asthma</a>
          <a href='https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653' target='_blank' rel="noreferrer">MayoClinic- Asthma</a>
          <a href='https://aafa.org/asthma/asthma-treatment/asthma-treatment-action-plan/' target='_blank' rel="noreferrer">Asthma Action Plans</a>
          <a href='https://www.lung.org/getmedia/e6be8c67-a793-44a8-bd7c-96629e57c20d/respiratory-medication-chart.pdf' target='_blank' rel="noreferrer">Asthma Medication Types</a>

          <br/>
          <h5>Oahu</h5>
          <a href='https://www.keolamamo.org/' target='_blank' rel="noreferrer">Ke Ola Mamo,Native Hawaiian Health Care System</a>
          650 Iwilei Road<br/>
          Suite 175<br/>
          Honolulu, HI 96817<br/>
          (808) 848-8000<br/>

          <br/>
          <a href='https://www.wcchc.com/' target='_blank' rel="noreferrer">Waianae Coast Comprehensive Health Center</a>
          86-260 Farrington Highway<br/>
          Wai‘anae, HI 96792<br/>
          (808) 697-3300<br/>

          <br/>
          <a href='https://wahiawahealth.org/' target='_blank' rel="noreferrer">Wahiawa Health</a>
            302 California Ave Suite 106<br/>
          Wahiawā, HI 96786<br/>
          (808) 622-1618<br/>

          <br/>
          <a href='https://koolauloachc.org/' target='_blank' rel="noreferrer">Koolauloa Health Center</a>
            56-119 Pualalea St<br/>
            Kahuku, HI 96731<br/>
          (808) 293-9216<br/>

          <br/>
          <a href='https://waimanalohealth.org/' target='_blank' rel="noreferrer">Waimanalo Health Center</a>
          41-1347 Kalanianaole Highway<br/>
          Waimānalo, HI 96795<br/>
          (808) 259-7948<br/>

          <br/>
          <a href='https://waimanalohealth.org/' target='_blank' rel="noreferrer">Waikiki Health</a>
          277 ‘Ōhua Avenue<br/>
          Honolulu, HI 96815<br/>
          (808) 922-4787<br/>

          <br/>
          <a href='https://www.kphc.org/' target='_blank' rel="noreferrer">Kalihi-Palama Health Center</a>
          915 North King Street<br/>
          Honolulu, HI 96817<br/>
          (808) 848-1438<br/>

          <br/>
          <a href='https://www.kkv.net/' target='_blank' rel="noreferrer">Kokua Kalihi Valley Comprehensive Family Serives</a>
          2239 North School Street<br/>
          Honolulu, HI 96819<br/>
          (808) 791-9410<br/>

          <br/>
          <h5>Hawaii Island</h5>
          <a href='https://hmono.org/' target='_blank' rel="noreferrer">Hui Malama Ola Na Oiwi</a>
          1438 Kīlauea Avenue<br/>
          Hilo, HI 96720<br/>
          (808) 969-9220<br/>

          <br/>
          <a href='https://hmono.org/' target='_blank' rel="noreferrer">HāmākuaHealth Center</a>
          45-549 Plumeria St<br/>
          Honokaa, HI 96727<br/>
          (808) 775-7204<br/>

          <br/>
          <a href='https://www.hawaiipca.net/west-hawaii' target='_blank' rel="noreferrer">Hawai‘i Island Community Health Center</a>
          West Side Administrative Office<br/>
          Waikoloa, Kealakehe, Kailua-Kona, and Kealakekua<br/>
          75-5751 Kuakini Highway, Suite 203<br/>
          Kailua-Kona, HI 96740<br/>
          (808) 326-5629<br/>

          <br/>
          East Side Administrative Office<br/>
          Hilo, Keaʻau, Kaʻū, and Pāhoa<br/>
          450 Kilauea Ave., Suite 105<br/>
          Hilo, HI 96720<br/>
          (808) 333-3600<br/>

          <br/>
          <a href='https://www.kipukaokeola.com/' target='_blank' rel="noreferrer">Kipuka O Ke Ola</a>
          64-1035 Hawaiʻi Belt Rd suite F<br/>
          Waimea, HI 96743<br/>
          (808) 885-5900<br/>

          <br/>
          <a href='https://kukuilifestylemedicine.com/' target='_blank' rel="noreferrer">Kukui Lifestyle Medicine Clinic</a>
          82-6066 Mamalahoa Hwy, Suite 14<br/>
          Captain Cook, HI 96704<br/>
          (808) 825-6557<br/>

          <br/>
          <a href='https://waimeaprimarycare.com/' target='_blank' rel="noreferrer">Waimea Primary Care</a>
          65-1298B Kawaihae Road<br/>
          Waimea HI 96743<br/>
          (808) 731-5003<br/>

          <br/>
          <h5>Maui</h5>
          <a href='https://hnkop.org/' target='_blank' rel="noreferrer">Hui No KeOla Pono, Native Hawaiian Health Center</a>
          Walter Cameron Center<br/>
          95 Mahalani St. Room #21<br/>
          Wailuku, HI 96793<br/>
          (808) 244-4647<br/>

          <br/>
          <a href='https://www.mauliolapharmacy.com/' target='_blank' rel="noreferrer">Mauli Ola Pharmacy</a>
          95 Mahalani Street Room 28-5<br/>
          Wailuku HI 96793<br/>
          (808) 446-3348<br/>

          <br/>
          2180 Main Street Suite 102.<br/>
          Wailuku, HI 96793<br/>
          (808) 633-4140<br/>

          <br/>
          <a href='https://www.hawaiipca.net/hana-health' target='_blank' rel="noreferrer">Hāna Health</a>
          4590 Hāna Highway<br/>
          Haiku, HI 96713<br/>
          (808) 248-8294<br/>

          <br/>
          <a href='https://www.hawaiipca.net/hana-health' target='_blank' rel="noreferrer">Malama I Ke Ola Health Center</a>
          1881 Nani St<br/>
          Wailuku, HI 96793<br/>
          (808) 871-7772<br/>

          <br/>
          <h5>Lanai</h5>
          <a href='https://www.hawaiipca.net/lanai-hc' target='_blank' rel="noreferrer">Lāna‘i Community Health Center</a>
          333 Sixth Street<br/>
          Lāna‘i City, HI 96763<br/>
          (808) 565-6919<br/>

          <br/>
          <h5>Molokai</h5>
          <a href='https://napuuwai.org/' target='_blank' rel="noreferrer">Na Puuwai, Native Hawaiian Health Center</a>
          604 Mauna Loa Hwy<br/>
          Kaunakakai HI 96748<br/>
          (808) 560-3653<br/>

          <br/>
          <a href='https://napuuwai.org/' target='_blank' rel="noreferrer">Moloka‘i Community Health Center</a>
          30 Oki Place<br/>
          Kaunakakai, HI 96748<br/>
          (808) 553-5038<br/>

          <br/>
          <h5>Kauai</h5>
          <a href='https://www.hoolalahui.org/' target='_blank' rel="noreferrer">Hoola Lahui Hawaii, Native Hawaiian Heatlh Center</a>
          4491 Rice Street, Suite 106<br/>
          Lihue, HI 96766<br/>
          (808) 240-0100<br/>

          <br/>
          <a href='https://www.hoolalahui.org/services/medical-services/' target='_blank' rel="noreferrer">Kaua‘i Community Health Center</a>
          4800D Kawaihau Road<br/>
          Kapaa, HI 96746<br/>
          (808) 240-0170

        </div>
      </div>
    </div>
  );
};

export default Resources;
