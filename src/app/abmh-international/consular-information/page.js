

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './internship-observer-ship.css'


const Interobserv = () => {


  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);



  return (


    <>
      <title>Consular Information</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  ABMH International / <span className="breadcrumbsactive">Consular Information</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/commonimages/commabminternatnew.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* inter / obser pg start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="intershimain">

            <div className="intertime mt-4">
              <h2>Consular Information</h2>
            </div>
            <table className="table table-hover table-bordered intertable">
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Indian Embassy Details</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Afghanistan</td>
                  <td>

                    Embassy of India,Kabul
                    Malalaiwat, Shar-e-Naw,
                    Kabul, Afghanistan<br></br>

                    Telephone: 00-873-763095560 (satellite tel), 00-93-20-2200185<br></br>
                    Fax: 00-873-763095561<br></br>
                    E-Mail: embassy@indembassy-kabul.com<br></br>

                    Web link: www.eoi.gov.inkabul<br></br>

                  </td>
                </tr>

                <tr>
                  <td>Algeria</td>
                  <td>
                    Embassy of India,Algiers
                    14 Rue des Abassides
                    El Biar
                    BP 108, 16030 Algiers, Algeria<br></br>

                    Telephone: 00-213-21-923288, 923444<br></br>
                    Fax: 00-213-21-924011<br></br>
                    E-Mail: amb.algiers@mea.gov.in (Ambassador),
                    hoc.algiers@mea.gov.in (HOC),
                    cons.algiers@mea.gov.in (Consular),
                    com.algiers@mea.gov.in (Commercial)<br></br>

                    Web Link: www.indianembassyalgiers.org
                  </td>
                </tr>

                <tr>
                  <td>Angola</td>
                  <td>
                    Embassy of India,Luanda
                    No 3, Rua 28 De Maio,
                    Maianga, Luanda, Angola<br></br>

                    Telephone: 00-244-222 371 060, 00-244-222371 067<br></br>
                    Fax: 00-244-222 371 094<br></br>
                    E-Mail: amb.luanda@mea.gov.in,<br></br>
                    hoc.luanda@mea.gov.in,
                    ambindluanda@netcabo.co.ao,
                    ambofficeluanda@netcabo.co.ao

                    Web Link: www.indembangola.org<br></br>
                  </td>
                </tr>

                <tr>
                  <td>Benin <br></br>
                    [*Under jurisdiction of High Commission of India, Abuja]</td>
                  <td>
                    Honorary Consulate General of India,Cotonou
                    Onsulat de L Inde, Nirvana,
                    Lot No.1430 R , Vedoko Missogbe,
                    Cotonou, Benin.<br></br>

                    Telephone: 00-229-21-385220, 97-974502(R), 95-954091 (R), 90-905105 (R)<br></br>
                    Fax: 00-229-21-380724<br></br>
                    E-Mail: indconsul.benin@sify.com,
                    ashokmir@yahoo.com,
                    ashokmir@gmail.com<br></br>

                    Website:www.indianhcabuja.com
                  </td>
                </tr>

                <tr>
                  <td>Bangladesh</td>
                  <td>
                    High Commission of India, Dhaka
                    House No. 2,
                    Road No.142, Gulshan-1,
                    Dhaka, Bangladesh<br></br>

                    Telephone: Reception: 00880-2-9889339,<br></br>


                    EPABX : 00880-2-9888789-91 and 8820243-47<br></br>
                    Fax: 00880-2-9893050<br></br>
                    E-Mail: visahelp@hcidhaka.gov.in<br></br>

                    Web Link: www.hcidhaka.gov.in
                  </td>
                </tr>



                <tr>
                  <td>Bhutan</td>
                  <td>
                    Embassy of India,Thimphu
                    India House Estate, Jungshina,
                    Thimphu, Bhutan<br></br>

                    Consular Timing (on all working days):
                    Receiving applications-0900-1100 hrs,
                    Delivery-1600 hrs-1700 hrs<br></br>

                    Telephone: 00975-2-322162 (Reception)<br></br>
                    Fax: 00975-2-323195<br></br>
                    E-Mail: amb.thimphu@mea.gov.in,
                    dcmbht@druknet.bt,
                    dcm.thimphu@mea.gov.in,
                    com.thimphu@mea.gov.in,
                    hoc.thimphu@mea.gov.in,
                    consbht@druknet.bt,
                    cons.thimphu@mea.gov.in<br></br>

                    Web Link: www.indianembassythimphu.bt
                  </td>
                </tr>

                <tr>
                  <td>Botswana</td>
                  <td>
                    High Commission of India, Gaborone, Botswana
                    Physical Address: Plot No. 5375, President’s Drive, Gaborone, Botswana
                    Postal Address: Pvt. Bag 249,
                    Gaborone, Botswana<br></br>
                    Telephone: + 267 3972676<br></br>
                    Fax: + 267 3974636<br></br>
                    E-Mail: hoc@hci.org.bw<br></br>

                    Web Link: www.hcigaborone.org.bw
                  </td>
                </tr>

                <tr>
                  <td>Burkina Faso<br></br>
                    (*Under jurisdiction of High Commission of India, Accra)</td>
                  <td>
                    Honorary Consulate of India, Ouagadougou
                    No. 167, Rue Joseph Badoua,
                    B.P. 6648, Ouagadougou-01,
                    Burkina Faso.<br></br>

                    Telephone: 00-226-50314414 (O), 50314595 (R)<br></br>
                    Fax: 00-226-50315783<br></br>
                    E-Mail: gan@fazonet.bf<br></br>

                    Website: www.indiahc-ghana.com
                  </td>
                </tr>

                <tr>
                  <td>Cameroon<br></br>
                    [*Under High Comm. of India, Abuja]</td>
                  <td>
                    Honorary Consulate of India, Cameroon
                    C /o. Nakira-kam, 1058, Bd du general Leclerc,
                    Douala, Cameroon.
                    [R]: BP 15175, Douala, Cameroon.<br></br>

                    Telephone: 00-237-33427464 / 33425880 / 33427474 (O), 33427906 (R)<br></br>
                    Fax: 00-237-33429773<br></br>
                    E-Mail: ravidouala@yahoo.com (Hony Consul)<br></br>

                    Website:www.indianhcabuja.com
                  </td>
                </tr>

                <tr>
                  <td>Central African Republic</td>
                  <td>
                    Honorary Consulate General of India
                    B. P. 3364, Enface de Mamica
                    A. V. Banda, Pk-4, Bangui
                    Republique Centrafricane.<br></br>

                    Telephone: 00-236-70804343<br></br>
                    E-Mail: NA
                  </td>
                </tr>


                <tr>
                  <td>Chad</td>
                  <td>
                    Honorary Consulate of India, N djamena
                    Avenue Charles de Gaulle,
                    P.O. Box No.1500, N djamena, Rep. of Chad
                    [*Under jurisdiction of High Commission of India, Abuja]<br></br>

                    Telephone: 00-235-2524307 (O), 2520333
                    (R), 00-235-6552270 (M)<br></br>
                    Fax: 00-235-2524357<br></br>
                    E-Mail: tv2000@intnet.td (O),
                    nassirarzamkhan@yahoo.co.uk (R)<br></br>

                    Website:www.indianhcabuja.com
                  </td>
                </tr>

                <tr>
                  <td>Congo<br></br>
                    [*Under jurisdiction of Embassy of India,
                    Kinshasa, DR of Congo]</td>
                  <td>
                    Honorary Consulate General of India, Brazzaville
                    B.P. 168, Avenue Bayardelle,
                    Brazaville, Republic of Congo.<br></br>

                    Telephone: 00-242-811646 (O) / 810099 (R)<br></br>
                    Fax: 00-242-815782 (OR)<br></br>
                    E-Mail: hcgbzv@yahoo.co.in,
                    regalste@yahoo.com (R),
                    regal@mtybernet.com (R),
                    regalcgo2@yahoo.fr (R)
                  </td>
                </tr>

                <tr>
                  <td>Republic of Congo, Gabon and Central African Republic</td>
                  <td>
                    Embassy of India,Kinshasa
                    18-B, Avenue Batetela,
                    C/Gombe, Kinshasa
                    Concurrently accredited to Republic of Congo,
                    Gabon and Central African Republic.<br></br>

                    Telephone: 00243-971000490/91/92<br></br>
                    E-Mail: amb@indembassykin.org (Ambassador),
                    amboffice@indembassykin.org (AMB Office), cons@indembassykin.org (Consular),
                    com@indembassykin.org (Trade),
                    sspol@indembassykin.org (Political),
                    hoc@indembassykin.org (HOC)<br></br>

                    Web Link: www.eoikinshasa.nic.in
                  </td>
                </tr>

                <tr>
                  <td>Cote d Ivoire <br></br> [Ivory Coast]</td>
                  <td>
                    Embassy of India, Abidjan, Ivory Coast
                    Villa 2728, ILot 229, 7eme Tranche, II-Plateaux, Abidjan
                    Postal Address : 06 BP 318, Abidjan 06
                    Telephone: 00-225 2242 3769/7079/1851/1884
                    Fax: 00-225 2242 6649
                    E-Mail: amb.abidjan@mea.gov.in,<br></br>

                    amb.office@eoiabidjan.org,
                    hoc.abidjan@mea.gov.in<br></br>

                    Web Link: www.eoiabidjan.org
                  </td>
                </tr>

                <tr>
                  <td>Djibouti<br></br>
                    [*Under jurisdiction of Embassy of India, Addis Ababa (Ethiopia)]</td>
                  <td>
                    Honorary Consulate of India, Djibouti
                    Rue D Athens, Djibouti City,
                    Post Box No.171, Djibouti.<br></br>

                    Telephone: 00-253-350219, 552394 (O), 350911 (R)<br></br>
                    Fax: 00-253-351778<br></br>
                    E-Mail: ops@kothari.dj,nalin@kothari.dj<br></br>

                    Website:www.indianembassy.gov.et
                  </td>
                </tr>

                <tr>
                  <td>Egypt</td>
                  <td>
                    Embassy of India,Cairo
                    5 Aziz Abaza Street, Zamalek,
                    PO Box No. 718, Cairo, Egypt
                    Consular Section: 37, Talaat Harb,
                    Downtown Cairo, Egypt<br></br>

                    Workings Hours: 0930-1130 (Receipt of applications);
                    1300-1500 (Delivery)<br></br>
                    Telephone: 00-202-27360052, 27363051, 27356053<br></br>
                    Fax: 00-202-27364038, 27382965(DCM), 23936702 (Info)<br></br>
                    E-Mail: embassy@indembcairo.com,
                    amb.cairo@mea.gov.in (Amb),
                    dcm.cairo@mea.gov.in (DCM),
                    info.cairo@mea.gov.in<br></br>

                    Web Link: www.indembcairo.com
                  </td>
                </tr>

                <tr>
                  <td>Ethiopia</td>
                  <td>
                    Embassy of India, Addis Ababa
                    Arada District, Kebele-14 [Next to Bel Air Hotel],
                    H.No 224, Around Aware, Post Box No. 528,
                    Addis Ababa, Ethiopia<br></br>
                    Telephone: 00-251-11-1235538/39/40/41<br></br>
                    Fax: 00-251-11-1235547/1235548<br></br>
                    E-Mail: hoc.addisababa@mea.gov.in<br></br>

                    Web Link: www.indembassyeth.in
                  </td>
                </tr>

                <tr>
                  <td>Ghana</td>
                  <td>
                    High Commission of India, Accra (Ghana)
                    No. 9, Ridge Road, Roman Ridge
                    PO Box CT-5708, Cantonments, Accra (GHANA)
                    Working Hours: Monday – Friday: 8:30 am – 5:00 pm;
                    Consular: 0900-1200 Hrs.<br></br>
                    Telephone: +233-307020903/307020904/307020905,<br></br>
                    Emergency (after office hours): 0263135416<br></br>
                    Fax: +233-302772176<br></br>
                    E-Mail: hc.accra@mea.gov.in, hoc.accra@mea.gov.inWeb Link: www.indiahc-ghana.com
                  </td>
                </tr>

                <tr>
                  <td>Gambia<br></br>
                    [*Under E/I Dakar]</td>
                  <td>
                    Honorary Consulate General of India, Banjul
                    1st Floor, Kripa House, Fajara M
                    Section, Off Kairaba Avenue,
                    PO Box No.2389, Serekunda KSMD,
                    The Gambia.<br></br>

                    Telephone: 00-220-4397741, 4393628 (O), 4495771
                    (R), +9965771 (M)<br></br>
                    Fax: 00-220-4393637<br></br>
                    E-Mail: rammohan@gamtel.gm,
                    rmjam@hotmail.com
                  </td>
                </tr>

                <tr>
                  <td>Guinea<br></br>
                    [*Under jurisdiction of Embassy of India, Abidjan]</td>
                  <td>
                    Honorary Consulate of India, Conakry
                    M/s Tolarams S.A.R.L., A Cote du
                    Dispanseur Madina, Commune de Matam
                    B.P. 3380, Conakry<br></br>

                    Telephone: 00-224-461148 / 461111, 63407979 62667979 (Consular Section), 63400000 (M), 60267272 (M)<br></br>
                    E-Mail: accounts@topaz.com.gn,<br></br>
                    kumar@topaz.com.gn
                  </td>
                </tr>

                <tr>
                  <td>Guinea Bissau<br></br>
                    [*Under jurisdiction of Embassy of Senegal]</td>
                  <td>
                    Honorary Consulate of India in Bissau
                    Apartment 101, First Floor,
                    Avenida Pansau Na Isna
                    NSIA Building, Bissau.<br></br>

                    Telephone: +245-6934190, +245-6605160
                  </td>
                </tr>

                <tr>
                  <td>Iraq</td>
                  <td>
                    Embassy of India,Baghdad
                    House No. 18, Street No. 16
                    Mohalla No. 609, Al Mansour District
                    Baghdad.<br></br>

                    Telephone: 00964-7704439731 (M) – Ambassador;
                    00964-7704439706(M) – HOC;
                    00870772223446 (SAT) – Gen.<br></br>
                    E-Mail: amb.baghdad@mea.gov.in(Amb),
                    hoc.baghdad@mea.gov.in
                    (For Commercial/ Education/ ITEC matters), adm.baghdad@mea.gov.in(Admin),
                    cons.baghdad@mea.gov.in (For Consular/ Labour /Visa/Passport matters)<br></br>

                    Web Link: indianembassybaghdad.in
                  </td>
                </tr>

                <tr>
                  <td>Kenya<br></br>
                    (*Concurrently Accredited to Federal Republic of Somalia and State of Eritrea)</td>
                  <td>
                    High Commission of India, Nairobi
                    3, Harambee Avenue
                    Jeevan Bharati Building
                    PO Box No.30074-00100, NAIROBI, KENYA<br></br>

                    Telephone: + 254 20 2222 566/7, 2225 104, 2224 500<br></br>
                    Fax: + 254 20 316 242, 224 8320, 221 1164<br></br>
                    E-Mail: hc.nairobi@mea.gov.in (High Commissioner), dhc.nairobi@mea.gov.in (Deputy High Commissioner),
                    hoc.nairobi@mea.gov.in (Head of Chancery), passportvisa@hcinairobi.co.ke (visa enquiries), cons.nairobi@mea.gov.in
                    (passport- OCI- PIO related enquiries), comhcinbo@kenyaweb.com (for commercial enquiries)<br></br>

                    Web Link: www.hcinairobi.co.ke
                  </td>
                </tr>

                <tr>
                  <td>Kuwait</td>
                  <td>
                    Embassy of India,Kuwait
                    Diplomatic Enclave,
                    Arabian Gulf Street, P O Box No.1450, Safat 13015, Kuwait<br></br>

                    Issue of token: 0730-1200 1400-1530 hrs;
                    Submission: 0745-1300 1400-1600 hrs<br></br>

                    Telephone: 00965 22530612, 22571192<br></br>
                    Consular Emergency Assistance 00-965-22530600<br></br>
                    Fax: 00965 22546958<br></br>
                    E-Mail: contact@indembkwt.org, psamb@indembkwt.org,ambss@indembkwt.org, labour@indembkwt.org, counsellor@indembkwt.org,
                    sscounsellor@indembkwt.org, hoc@indembkwt.org,fsinfo@indembkwt.org<br></br>

                    Web Link: www.indembkwt.org
                  </td>
                </tr>

                <tr>
                  <td>Liberia
                    (*Under E/I Abidjan)</td>
                  <td>
                    Honorary Consulate General of India, Monrovia
                    Vai Town, Bushrod Island,
                    PO Box No.10-3717, 1000, Monrovia,
                    10, Liberia.
                    (R) India House, Mamba Pt., Monrovia<br></br>

                    Telephone: 00-231-6-510144, 4-721721<br></br>
                    E-Fax: 00-320-3234378<br></br>
                    E-Mail: jeetytrading@awli.net,<br></br>
                    jeetytrading@yahoo.com
                  </td>
                </tr>

                <tr>
                  <td>Libya Malta</td>
                  <td>
                    Embassy of India,Libya
                    High Commission of India to MaltaNafleen Area, Near Fashloom Roundabout
                    Post Box 3150
                    Tripoli, State of LibyaTelephone: +218-21-3409288 89 (PABX)<br></br>
                    Fax: +218-21-3409281<br></br>
                    E-Mail: ambassador@indianembassy.ly (Ambassador),
                    hoc.tripoli@mea.gov.in<br></br>
                    (Head of Chancery and Consular Officer), administration@indianembassy.ly (Administration), com.tripoli@mea.gov.in (Commercial ),
                    consularvisa@indianembassy.ly(Consular Visa), information@indianembassy.ly(Information/Culture)Web Link: www.indianembassy.ly
                  </td>
                </tr>

                <tr>
                  <td>Madagascar</td>
                  <td>
                    Embassy of India,Antananarivo
                    4, Lalana Rajaonson Emile
                    Tsaralalana Bp 1787, Antananarivo
                    Madagascar<br></br>

                    Telephone: 00-261-20-2223334, 2227156<br></br>
                    Fax: 00-261-20-2233790<br></br>
                    E-Mail: indesecamb@blueline.mg,
                    indembmd@blueline.mg,
                    indcomsec@blueline.mg,
                    indadmin@blueline.mg,
                    indconsular@blueline.mg,
                    hoc.aanarivo@mea.gov.in<br></br>

                    Web Link: www.embassyofindia.mg
                  </td>
                </tr>

                <tr>
                  <td>Malawi</td>
                  <td>
                    Indian High Commission in Lilongwe, Malawi
                    Area 9, House No. 55
                    Lilongwe Malawi
                  </td>
                </tr>

                <tr>
                  <td>Maldives</td>
                  <td>
                    High Commission of India, Male’, Maldives
                    H. Athireege Aage
                    Ameeru Ahmed Magu, Henveiru
                    Male’, Maldives 20125<br></br>

                    Telephone: (960) 3323015/16<br></br>
                    Fax: (960) 3324778<br></br>
                    E-Mail: HC: hc@hicomindia.com.mv, DHC: dhc.male@mea.gov.in, HOC: hoc.male@mea.gov.in<br></br>

                    Web Link: www.hcimaldives.in
                  </td>
                </tr>

                <tr>
                  <td>Mali</td>
                  <td>
                    Embassy of India,Bamako (Mali)
                    101, Avenue de l’OUA, B.P. 8008
                    Badalabougou Est, Bamako (Mali)<br></br>

                    Consular Services Working Hours: 0900 to 1200 Hrs, 1500 to 1600 Hrs (Mon -Fri)<br></br>

                    Telephone: 00-223-2023 5420, 00-223-2023 5421 Consular Emergency : 00-223-76 40 92 58/ 71 91 89 10<br></br>
                    Fax: 00-223-2023 5417<br></br>
                    E-Mail: amb.bamako@mea.gov.in,
                    hoc.bamako@mea.gov.in,
                    cons.bamako@mea.gov.in<br></br>

                    Web Link: www.amb-inde-bamako.org
                  </td>
                </tr>

                <tr>
                  <td>Mauritania<br></br>
                    [*Under Embassy of India, Bamako(Mali)].</td>
                  <td>
                    Honorary Consulate of India, Nouakchott
                    ASML Group, Alkaima City Centre 7th
                    floor, 10 Rue Mamadou Konate,
                    PO Box 2823, Nouakchott<br></br>

                    Telephone: 00-222-45241111 (O R)<br></br>
                    Fax: 00-222-45255795<br></br>
                    E-Mail: amouhidine@asmlgroup.com
                  </td>
                </tr>

                <tr>
                  <td>Mauritius</td>
                  <td>
                    High Commission of India,Port Louis
                    6th Floor, LIC Building
                    John Kennedy Street
                    Port Louis<br></br>

                    Telephone: (230) 208 3775/76<br></br>
                    Fax: (230) 208 8891<br></br>
                    E-Mail: hicom.ss@intnet.mu,hicombc@intnet.mu, hicom.cons@intnet.mu,coined@intnet.mu<br></br>

                    Web Link: indiahighcom-mauritius.org
                  </td>
                </tr>

                <tr>
                  <td>Morocco</td>
                  <td>
                    Embassy of India,Rabat
                    88, Rue Oulad Tidrarine
                    Souissi, Rabat, Morocco.
                    Telephone: 00212-537635801, 537635802, 537635803
                    Fax: 00212- 537 634733, 537634734<br></br>

                    Web Link: www.indianembassyrabat.com
                  </td>
                </tr>

                <tr>
                  <td>Mozambique<br></br>
                    (Concurrently accredited to the Kingdom of Swaziland)</td>
                  <td>
                    High Commission of India, Maputo
                    Av. Kenneth Kaunda No. 167
                    Post Box No. 4751
                    Maputo (Mozambique)<br></br>

                    Telephone: +258-21492437 / 21490717<br></br>
                    Fax: + 258-21492364<br></br>
                    E-Mail: hicomind@tvcabo.co.mz<br></br>

                    Web Link: www.hicomind-maputo.org
                  </td>
                </tr>

                <tr>
                  <td>Namibia</td>
                  <td>
                    High Commission of India, Windhoek, Namibia
                    97, Nelson Mandela Avenue
                    Klein Windhoek
                    Windhoek, Namibia<br></br>

                    Telephone: +264 – 61- 226037, 226036, 228433<br></br>
                    Fax: +264 – 61 – 237320<br></br>
                    E-Mail:hcindia@mweb.com.na(HC),
                    hicomind@mweb.com.na (General) ,
                    fshoc@mweb.com.na (HOC),
                    attche@mweb.com.na (Attache),
                    hciadmn@mweb.com.na (Admn)<br></br>

                    Web Link: www.highcommissionofindia.web.na
                  </td>
                </tr>

                <tr>
                  <td>Nepal</td>
                  <td>
                    Embassy of India,Kathmandu
                    P.O. Box No. 292, 336, Kapurdhara Marg,
                    Kathmandu, Nepal.
                    Consular Assistance : 0097714411751,
                    Working Hours : 0900 Hrs. – 1730 Hrs. (NST)<br></br>

                    Telephone: 00-977-1-4410900, 4414990, 4411699<br></br>
                    Fax: 00-977-1-4420130 (Amb), 4428245 (DCM), 4428279<br></br>
                    E-Mail: hoc@eoiktm.org(General),
                    amb@eoiktm.org (Amb),
                    dcm@eoiktm.org (DCM)<br></br>

                    Web Link: www.indianembassy.org.np
                  </td>
                </tr>

                <tr>
                  <td>Niger</td>
                  <td>
                    Embassy of India,Niamey
                    B.P. 201, Rue Ambassades 14,
                    Kouara Kano, Niamey-CN1
                    NIGER<br></br>

                    Telephone: 00-227-20370029/30<br></br>
                    Fax: 00-227-20370116<br></br>
                    E-Mail: hoc.niamey@mea.gov.in<br></br>

                    Web Link: www.indembniamey.org
                  </td>
                </tr>

                <tr>
                  <td>Nigeria – Abuja</td>
                  <td>
                    High Commission of India,ABUJA
                    15, RIO NEGRO CLOSE,
                    Off Yedseram Street
                    Maitama, Abuja, Nigeria<br></br>
                    Telephone: 00-234-7080622800-04<br></br>
                    Fax: 00-234-7080622805<br></br>
                    E-Mail: cons.abuja@mea.gov.in
                    trade.abuja@mea.gov.in
                    hoc.abuja@mea.gov.in<br></br>
                    info.abuja@mea.gov.inWeb Link: www.indianhcabuja.com
                  </td>
                </tr>

                <tr>
                  <td>Oman</td>
                  <td>
                    Embassy of India,Muscat
                    Jami’at Al – Dowal Al – Arabiya Street,
                    Diplomatic Area, Al Khuwair,
                    P.O. Box 1727, PC 112.<br></br>

                    Telephone: 00968-24684500<br></br>
                    Fax: 24698291 (General),
                    24697591 (Ambassador),
                    24692791 (Consular),
                    24684546 (Community Welfare)<br></br>
                    E-Mail: indiamct@omantel.net.om (General),
                    hoc.muscat@mea.gov.in (HOC),
                    hom@indemb-oman.org (Amb),
                    couns@indemb-oman.org (Counsellor)<br></br>

                    Working hours of the consular section: Sunday – Thursday<br></br>
                    Depositing of Documents: 9:00 a.m. – 12.30 p.m<br></br>
                    Collection of Documents: 4:00 p.m. – 4.30 p.m.<br></br>
                    Working hours of the Community welfare wing: Sunday – Thursday 8:30 a.m. – 5.00 p.m.<br></br>

                    Web Link: www.indemb-oman.org
                  </td>
                </tr>

                <tr>
                  <td>Pakistan</td>
                  <td>
                    High Commission of India, Islamabad
                    G-5, Diplomatic Enclave,
                    Islamabad,
                    Pakistan.<br></br>

                    Telephone: +92-51-2206950/51/52/53, 2828376<br></br>
                    Fax: +92-51-2823386, 2823102, 2206954<br></br>
                    E-Mail: hc.islamabad@mea.gov.in(HC),
                    dhc.islamabad@mea.gov.in(DHC),
                    hoc.islamabad@mea.gov.in(HOC),<br></br>

                    Web Link: www.india.org.pk
                  </td>
                </tr>

                <tr>
                  <td>Qatar</td>
                  <td>
                    Embassy of India,Doha, Qatar
                    Villa No. 19, Zone No. 42, Street No. 828
                    Wadi Al Neel Lane, Al Hilal Area,
                    P.O. Box 2788, Doha<br></br>

                    Telephone: 974-44255777, 974-44255700 (Beyond office hours), 44255715/16 (Consular), 44255724 (Labour)<br></br>
                    Fax: 974-44670448 (General), 974-44672684 (Consular), 974-44675399(Labour)<br></br>
                    E-Mail: amb.doha@mea.gov.in,
                    ambassador@qatar.net.qa (Ambassador),
                    dcm@qatar.net.qa,
                    dcm.doha@mea.gov.in, (DCM)
                    da@qatar.net.qa,
                    dadoha-navy@nic.in (Defence Attache),
                    fspe@qatar.net.qa(PressEducation),
                    hoc.doha@mea.gov.in(HOC),
                    indfscom@qatar.net.qa,
                    com.doha@mea.gov.in (Commercial),
                    cons.doha@mea.gov.in (Consular),
                    labourofficer@qatar.net.qa (Labour),
                    press.doha@mea.gov.in,
                    pressofficer@qatar.net.qa (PIC)<br></br>

                    Web Link: www.indianembassyqatar.org
                  </td>
                </tr>

                <tr>
                  <td>Saudi Arabia</td>
                  <td>
                    Embassy of India
                    B-1, Diplomatic Quarter,
                    P.B.No.94387, Riyadh-11693,
                    Saudi Arabia.<br></br>
                    Telephone: 00-966-1-4884144, 4884691, 4884692, 4834254, 4884697, 4881982 (24 hour Help Line)
                    Saudi Arabia 00-966-1-4884750 (Chancery), 4804764 (Commercial)<br></br>
                    E-Mail: amb.riyadh@mea.gov.in
                    dcm.riyadh@mea.gov.in
                    pol.riyadh@mea.gov.in
                    cons.riyadh@mea.gov.in
                    hoc.riyadh@mea.gov.in
                    com.riyadh@mea.gov.in
                    def.riyadh@mea.gov.in
                    wel.riyadh@mea.gov.in<br></br>

                    Web Link: www.indianembassy.org.sa
                  </td>
                </tr>

                <tr>
                  <td>Senegal<br></br>
                    (*Concurrently accredited to Cape Verde, Gambia, and Guinea Bissou)</td>
                  <td>
                    Embassy of India,Dakar
                    5 Avenue Carde
                    BP 398, Dakar
                    Senegal<br></br>

                    Telephone: 00-221-338495875 Emergency No.00-221-338495875<br></br>
                    Fax: 00-221-338223585<br></br>
                    E-Mail: indiacouns@orange.sn(Second Secretary), indiacom@orange.sn(Second Secretary), consular@orange.sn(Consular Section)<br></br>

                    Web Link: www.embassyofindiadakar.org
                  </td>
                </tr>

                <tr>
                  <td>Seychelles</td>
                  <td>
                    High Commission of India,Seychelles
                    Le Chantier, PO Box 488,
                    Victoria-Mahe,
                    Seychelles.<br></br>

                    Telephone: + (248) 4610 301/302/303/304<br></br>
                    Fax: +(248) 4610 308<br></br>
                    E-Mail: hc.mahe@mea.gov.in,
                    hoc.mahe@mea.gov.in<br></br>

                    Web Link: www.seychelles.nethicomind
                  </td>
                </tr>

                <tr>
                  <td>Sierra Leone<br></br>
                    [*Under jurisdiction of Embassy of India, Abidjan, Cote d Ivoire]</td>
                  <td>
                    Honorary Consulate General of India, Freetown
                    Post Box No. 26, 5 Rawdon Street,
                    Freetown, Sierra Leone.<br></br>

                    Telephone: 00-232-22-22452 / 5, 224340, 223659, 225521, 225143 (O), 231050, 230836 (R), +00-44-7711742136 (M)<br></br>
                    Fax: 00-232-22-226343<br></br>
                    E-Mail: kanazad@hotmail.com,
                    tcsfreetown@yahoo.com,
                    harishagnani@yahoo.com
                  </td>
                </tr>

                <tr>
                  <td>South Africa<br></br>
                    (Concurrently accredited to the Kingdom of Lesotho)</td>
                  <td>
                    High Commission of India,Pretoria
                    852 Schoeman Street
                    Pretoria<br></br>

                    Telephone: 0027-123425392<br></br>
                    Fax: 0027-123425310<br></br>
                    E-Mail: indiahc@hicomind.co.za (High Commissioner),
                    dhc@hicomind.co.za(Dy. HC),
                    polinf@hicomind.co.za(FS HOC),
                    hciadmn@hicomind.co.za(Asst. Admn)<br></br>

                    Web Link: www.indiainsouthafrica.com
                  </td>
                </tr>

                <tr>
                  <td>South Sudan</td>
                  <td>
                    Embassy of India
                    Block No. 522, Hai Matar Area
                    Juba, South Sudan<br></br>
                    Telephone: 00-211-922458006/007<br></br>
                    Fax: 00-211-811-822 236<br></br>
                    E-Mail: amb.juba@mea.gov.in,
                    hoc.juba@mea.gov.in<br></br>

                    Web Link: www.indembjuba.org
                  </td>
                </tr>

                <tr>
                  <td>Sri Lanka</td>
                  <td>
                    High Commission of India, Colombo
                    36-38, Galle Road,
                    Colombo, Sri Lanka
                    Consular Section Working Hours: 0900 to 1300 1400 to 1630 hours on working days.
                    In case of emergency, please contact the switchboard at the numbers given below which are operational round the clock<br></br>

                    Telephone: +94-11-2327587, 2421605, 2422788 / 89 (Operational round the clock / Emergency helpline)<br></br>
                    Fax: +94-11-2446403, 2448166<br></br>
                    E-Mail: hc.colombo@mea.gov.in(High Commissioner),
                    dhc.colombo@mea.gov.in(Deputy High Commissioner),
                    hoc.colombo@mea.gov.in (HOC),
                    info.colombo@mea.gov.in(Information Wing),
                    cons.colombo@mea.gov.in,
                    cons2.colombo@mea.gov.in(Consular Assistance)<br></br>

                    Web Link: www.hcicolombo.org
                  </td>
                </tr>

                <tr>
                  <td>Sudan</td>
                  <td>
                    Embassy of India,Khartoum
                    Plot No. 2, Al Amarat Street No. 01
                    Block 12 DH, Eastern Extension P.O. Box 707
                    Khartoum, Republic of the Sudan<br></br>

                    Telephone: +249 1 8357 4001/ 2/ 3<br></br>
                    Fax: +249 1 8357 4050/ 51<br></br>
                    E-Mail: amb.khartoum@mea.gov.in(Ambassador),
                    pol.khartoum@mea.gov.in(SS(PC)),
                    hoc.khartoum@mea.gov.in (SS(Cons) HOC)<br></br>

                    Web Link: www.indembsdn.com
                  </td>
                </tr>


                <tr>
                  <td>Tanzania</td>
                  <td>
                    High Commission of India,Dar-es-Salaam
                    82 Kinondoni Road, P.O. Box.2684,
                    Dar-es-Salaam, Tanzania
                    Working Hours of Consular Section: 0900 – 1030 hrs [for submission of applications] 1600 – 1645 hrs [for delivery of visas, passports, etc.]<br></br>

                    Telephone: 00-255-22-2669040/1<br></br>
                    Fax: 00-255-22-2669043, 2669050<br></br>
                    E-Mail: hc.desalaam@mea.gov.in(High Commissioner),
                    hoc.desalaam@mea.gov.in,
                    comm.desalaam@mea.gov.in,
                    couns@hcindiatz.org(Second Secretary)<br></br>

                    Web Link: www.hcindiatz.org
                  </td>
                </tr>

                <tr>
                  <td>Togo<br></br>
                    (*Under jurisdiction of High Commission of India, Accra)</td>
                  <td>
                    Honorary Consulate of India, Lome
                    18, Rue Du Commerce,
                    GPO Box 4529, Lome (Togo).<br></br>

                    Telephone:00-228-2223004 / 05<br></br>
                    Fax: 00-228-2222692, 2210430<br></br>
                    E-Mail: lalwanirp@hotmail.com<br></br>

                    Website:www.indiahc-ghana.com
                  </td>
                </tr>

                <tr>
                  <td>Tunisia</td>
                  <td>
                    Embassy of India,Tunis
                    4, Rue Didon,
                    Place Notre Dame, Mutuelville,
                    Tunis, Tunisia<br></br>

                    Telephone: 00-216-71-787819, 790968, 781825,<br></br>
                    Help line No. for Emergency Consular assistance: 71787819 Ext. 104<br></br>
                    Fax: 00-216-71-783394 (Chancery), 281189 (Ambassador)<br></br>
                    E-Mail: amb.tunis@mea.gov.in(Ambassador), hoc.tunis@mea.gov.in(Chancery), com.tunis@mea.gov.in(Commerce)<br></br>
                    Embassy Working Hours: Monday to Friday – 08.30 AM to 05.00 PM;<br></br>
                    Consular Section Working Hours: Monday to Thursday:-<br></br>
                    1. Submission of applications: 09.00 AM to 12.00 Noon<br></br>
                    2. Collection of Passports/Documents: 03.00 PM to 04.00 PM<br></br>

                    Web Link: www.embassyofindiatunis.com
                  </td>
                </tr>

                <tr>
                  <td>Uganda<br></br>
                    (Concurrently accredited to Rwanda and Burundi)</td>
                  <td>
                    High Commission of India,Kampala
                    (Concurrently accredited to Rwanda and Burundi)
                    Plot number 11, Kyadondo Road,
                    Nakasero, P.O.Box 7040, Kampala<br></br>

                    Consular Timings: 0930-1200 hours (Applications Received) and 1630-1730 hours (Passports/Visa delivered)<br></br>

                    Telephone: +256-41-4344631; +256-41-4257368; +256-41-4342994<br></br>
                    Fax: +256-41-4254943<br></br>
                    E-Mail: hoc.kampala@mea.gov.in,
                    consular@hcikampala.co.ug,
                    pshc@hcikampala.co.ug<br></br>

                    Web Link: www.hci.gov.inkampala
                  </td>
                </tr>

                <tr>
                  <td>United Arab Emirates</td>
                  <td>
                    Embassy of India
                    Plot No. 10, Sector W-59/02, Diplomatic Area, Off the Airport Road, P. O. Box 4090, Abu Dhabi, U.A.E.<br></br>

                    Telephone: +971 2 4492700 [Chancery],
                    4447738 (Amb.’s Office),
                    4490729 (CW) ,
                    4447768 (Consular)<br></br>
                    Fax: +971 2 4444685,
                    [Chancery], 4444685 / 4447768 / 4492273
                    [Consular], 4490729 [CW]<br></br>
                    E-Mail: ambassador@indembassyuae.org,
                    amboffice@indembassyuae.org,
                    dcm@indembassyuae.org,
                    commerce@indembassyuae.org,
                    consular@indembassyuae.org,
                    admn@indembassyuae.org,
                    hoc@indembassyuae.rog,
                    pol@indembassyuae.rog,
                    counsellor@indembassyuae.org,
                    defense@indembassyuae.org<br></br>

                    Web Link: www.indembassyuae.org
                  </td>
                </tr>

                <tr>
                  <td>Yemen</td>
                  <td>
                    Embassy of India,Sana’a
                    24th Street,
                    off Hadda Road in front of Hadda Post Office,
                    towards 50 Street before Y Telecom building,
                    Sana’a<br></br>
                    Telephone: 00 967 1 433 631 / 433 632<br></br>
                    Fax: 00 967 1 433 630<br></br>
                    E-Mail: amb.sanaa@mea.gov.in,

                    hoc.sanaa@mea.gov.in,
                    commercial@eoisanaa.org,
                    attache@eoisanaa.org,
                    consular@eoisanaa.org<br></br>

                    Web Link: www.eoisanaa.org
                  </td>
                </tr>

                <tr>
                  <td>Zambia</td>
                  <td>
                    High Commission of India
                    No.1 Pandit Nehru Road, Loangacres,
                    P.O. Box. 32111, Lusaka, Zambia<br></br>

                    Telephone:+260-211-253159/60<br></br>
                    Fax: +260-211-254118<br></br>
                    E-Mail: hc.lusaka@mea.gov.in(High Commissioner),
                    hoc.lusaka@mea.gov.in(Head of Chancery),
                    pol.lusaka@mea.gov.in(Political and Commerce Wing),
                    info.lusaka@mea.gov.in (Information ITEC Wing),
                    cons.lusaka@mea.gov.in(Consular Section)<br></br>

                    Web Link: www.hcizambia.com
                  </td>
                </tr>

                <tr>
                  <td>Zimbabwe</td>
                  <td>
                    Embassy of India, Harare
                    No.12, Natal Road
                    Belgravia, P O Box No.4620,
                    Harare, Zimbabwe<br></br>

                    Working Hours of Consular Section: 0900-1200 hrs -Receiving of Applications, 1600-1700 hrs – Collection<br></br>

                    Telephone: 00263 4 795955 / 56<br></br>
                    Fax: 00263 4 795958 / 795413<br></br>
                    E-Mail: ambassador@embindia.org.zw (Ambassador),
                    hoc@embindia.org.zw (First Secretary HOC),
                    attache.itec@embindia.org.zw , (Attache ITEC)
                    attache.admn@embindia.org.zw (Attache Admn Com),
                    attache.cons@embindia.org.zw (Attache Consular)<br></br>

                    Web Link: www.eoi.gov.inharare
                  </td>
                </tr>



              </tbody>

            </table>
          </div>
        </div>
      </div>
      {/* inter / obser pg end*/}
    </>



  );


};



export default Interobserv;
