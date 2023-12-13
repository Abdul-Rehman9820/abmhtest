

"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './diagnostic-services.css'


const Contactus = () => {


  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);




  return (


    <>

      <title>Premier Diagnostic Centre in Pune | Accurate & Advanced Medical Tests</title>
      <meta name="description" content="Discover the finest diagnostic services at Aditya Birla Memorial Hospital, Pune. Our advanced medical tests ensure accuracy and reliability, making us the best diagnostic center in Pune." />
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / <span className="breadcrumbsactive">Diagnostic Services</span>
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
          <Image width={2000} height={400} src="/commonimages/commbanDiagnostic-Services.png" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* Diagnostic Services pg start*/}

      <div className="parentcontainerwhi">
        <div className="customcontainer">


          <div className="diegnosmaincont">


            <div className="commqulityhead mb-4">
              <div className="commqulityheadbof">
                <h1 className="commqulityheadbalc">Diagnostic Services</h1>
                <span className="qualityheadborder"></span>
              </div>
            </div>



            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> Pathology Services</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Radiology Services</button>
              </li>

            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">


                <div className="Radiology-Services-cont Pathology-Services ">


                  <div className="Radiologytabel">


                    <table className="table table-hover table-bordered">

                      <tbody>


                        <tr>
                          <td>Sl.No</td>
                          <td>SERVICENAME</td>
                          <td>SPECIMENTYPE</td>
                          <td>TURNAROUNDVALUE</td>
                          <td>TURNAROUNDDURATION</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td> B 6    CF    (6 Disorders) </td>
                          <td>Dry Blood Spot</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td> PORPHOBILINOGEN QUANTITATIVE URINE, RANDOM</td>
                          <td>Urine</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>15q Microdeletions (Angelman/Prader-Willi Syndrome)</td>
                          <td>Blood</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>17 HYDROXY-PROGESTERON</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>17 KETOSTEROIDS</td>
                          <td>Urine - 24 Hours</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>24 HOUR URINARY V.M.A.(VANILMANDELIC ACID)</td>
                          <td>Urine - 24 Hours</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>5-HYDROXY INDOLE ACETIC ACID (HIAA)</td>
                          <td>Urine - 24 Hours</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>ABSOLUTE EOSINOPHIL COUNT</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>ACE- ANGIOTENSIN CONVERTING ENZYME</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>ACETAMINOPHEN(PARACETAMOL)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>ACETONE(QUALITATIVE)</td>
                          <td>Blood, Urine</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>ACETYL CHOLINE RECEPTOR ANTIBODY</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>ACID PHOSPHATASE</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>ACTH- ADRENO CORTICOTROPIC HORMONE</td>
                          <td>Blood - Plasma</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>ACTIVE VITAMIN B 12 (HOLOTRANSCOBALMIN)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>16</td>
                          <td>ACUTE LEUKEMIA DIAGNOSTIC &amp; PROGNOSTIC PANEL</td>
                          <td>Bone Marrow</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>17</td>
                          <td>ACUTE LYMPHOBLASTIC LEUKEMIA PANEL (BY FLOW CYTOMETRY)</td>
                          <td>BODY FLUID/BONE MARROW/BLOOD</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>18</td>
                          <td>ADAMTS 13 Activity</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>19</td>
                          <td>ADAMTS 13 gene mutation</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>20</td>
                          <td>ADENOSINE DEAMINASE(ADA)</td>
                          <td>Ascitic Fluid/ Pleural Fluid/ Pericardial Fluid/ Synovial Fluid/ CSF - Spinal</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>21</td>
                          <td>ADH- ANTI DIURETIS HORMONE (VASSOPRESSIN)</td>
                          <td>Blood - Serum</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>22</td>
                          <td>ADINO VIRUS IgM ANTIBODY</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>23</td>
                          <td>ADRENALINE (EPINEPHRINE) - 24 hrs Urine</td>
                          <td>Urine</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>24</td>
                          <td>ADRENALINE (EPINEPHRINE) - BLOOD PLASMA</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>25</td>
                          <td>AEROBIC CULTURE &amp; SENSITIVITY</td>
                          <td>Segment</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>26</td>
                          <td>AFB Culture by BactAlert</td>
                          <td>ET Secretions</td>
                          <td>42</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>27</td>
                          <td>AFB SUSCEPTIBILITY, BACTEC : 10 DRUG PANEL</td>
                          <td>BODY FLUID/SERUM</td>
                          <td>60</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>28</td>
                          <td>AFB SUSCEPTIBILITY, BACTEC : 5 DRUG PANEL</td>
                          <td>Isolate BacTAlert Bottle</td>
                          <td>60</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>29</td>
                          <td>AFB-ACID FAST BACILLI, SUSCEPTIBILITY-ISONIAZID</td>
                          <td>BAL</td>
                          <td>60</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>30</td>
                          <td>AFB-ACID FAST BACILLI, SUSCEPTIBILITY-LEVOFLOXACIN</td>
                          <td>Isolate BacTAlert Bottle</td>
                          <td>60</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>31</td>
                          <td>AFB-ACID FAST BACILLI, SUSCEPTIBILITY-RIFAMPICIN</td>
                          <td>BAL</td>
                          <td>60</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>32</td>
                          <td>ALANINE TRANSAMINASE (ALT/SGPT)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>33</td>
                          <td>ALBERT STAIN</td>
                          <td>Throat Swab</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>34</td>
                          <td>ALBUMIN</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>35</td>
                          <td>ALBUMIN  /  GLOBULIN  (A/G) RATIO</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>36</td>
                          <td>ALBUMIN (BODY FLUID)</td>
                          <td>Ascitic Fluid</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>37</td>
                          <td>ALDOLASE</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>38</td>
                          <td>ALDOSTERONE</td>
                          <td>Blood/Urine - 24 Hours</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>39</td>
                          <td>ALKALINE PHOSPHATASE</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>40</td>
                          <td>ALKALINE PHOSPHATASE WITH BONE FRACTION</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>41</td>
                          <td>ALLERGEN - RHINITIS / ASTHMA PANEL</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>42</td>
                          <td>ALLERGEN MILK (Immunocap specific IgE)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>43</td>
                          <td>ALLERGEN-COMPREHENSIVE ALLERGY PANEL-INFANCY up to 5 yrs</td>
                          <td>SERUM</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>44</td>
                          <td>ALLERGEN-DOG</td>
                          <td>SERUM</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>45</td>
                          <td>ALLERGIC BRONCHO-PULMONARY ASPERGILLOSIS(ABPA MINI)(SPECIFIC IgE ASPERGILLUS FUMIGATUS/ SPECIFIC IgG ASPERGILLUS FUMIGATUS)</td>
                          <td>SERUM</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>46</td>
                          <td>ALPHA 1 ANTI TRYPSIN</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>47</td>
                          <td>ALPHA 2 MACROGLOBULIN</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>48</td>
                          <td>ALPHA FETO PROTEIN (AFP)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>49</td>
                          <td>ALUMINIUM</td>
                          <td>Urine - 24 Hours/Blood/Urine</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>50</td>
                          <td>AMINO ACID ANALYSIS URINE RANDOM</td>
                          <td>Dry Blood Spot/Urine-Random</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>51</td>
                          <td>AMINO ACIDS, PLASMA</td>
                          <td>Heparin-Plasma/Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>52</td>
                          <td>AMINO LEVULINIC ACID (ALA)</td>
                          <td>Urine</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>53</td>
                          <td>AML COMBOQUEST IX  (RTPCRs for AML-ETO, PML-RARA, inv16; PCR for FLT3; NPM Mutation; CEBPA MUTATION)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>54</td>
                          <td>AML with Normal Cytogenetics (FLT3, NPM1,CEBPA)(SRL)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>55</td>
                          <td>AML/ETO t(8:21) by fish method</td>
                          <td>Bone Marrow</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>56</td>
                          <td>AMMONIA</td>
                          <td>EDTA-Plasma</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>57</td>
                          <td>AMYLASE</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>58</td>
                          <td>ANAEROBIC CULTURE</td>
                          <td>Segment</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>59</td>
                          <td>ANCA -PR3 (Canca)</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>60</td>
                          <td>ANCA Reflex</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>61</td>
                          <td>ANCA- MPO (p-ANCA)</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>62</td>
                          <td>ANDROSTENEDIONE</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>63</td>
                          <td>ANTI CARDIOLIPIN IgG ANTIBODY</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>64</td>
                          <td>ANTI CARDIOLIPIN IgM ANTIBODY</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>65</td>
                          <td>ANTI DNASE B</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>66</td>
                          <td>ANTI HAV-IgM ANTIBODY TO HEPATITIS A VIRUS</td>
                          <td>Blood</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>67</td>
                          <td>ANTI MITOCHONDRIAL ANTIBODIES</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>68</td>
                          <td>ANTI MULLARIAN HORMONE (AMH)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>69</td>
                          <td>ANTI NMDA RECEPTOR ENCEPHALITIS IGG ANTIBODIES.</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>70</td>
                          <td>ANTI SPERM ANTIBODY(ASA)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>71</td>
                          <td>ANTI THROMBIN III ANTIGEN</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>72</td>
                          <td>ANTI THYROGLOBULIN ANTIBODY ( aTg)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>73</td>
                          <td>ANTIPHOSPHOLIPASE A2 RECEPTOR (PLA2R) IGG</td>
                          <td>SERUM</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>74</td>
                          <td>APC- ACTIVATED PROTEIN C RESISTANCE</td>
                          <td>Blood/Whole Blood Citrate</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>75</td>
                          <td>APLA TOTAL PANEL(Anti Cardiolipin IgG,IgM Abs/Lupus Anticoagulant Screen/Beta 2 Glycoprotein IgG,IgM Abs)</td>
                          <td>Plasma and Serum</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>76</td>
                          <td>APO - A1 (APOLIPOPROTEIN A1)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>77</td>
                          <td>APO - B (APOLIPOPROTEIN B)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>78</td>
                          <td>ARSENIC</td>
                          <td>Blood/Urine/Urine - 24 Hours</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>79</td>
                          <td>ASCA-IGG AB TO SACCHAROMYCES</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>80</td>
                          <td>ASCORBIC ACID (VIT C)</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>81</td>
                          <td>ASMA- ANTI SMOOTH MUSCLE ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>82</td>
                          <td>ASO (QUANTITATIVE)</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>83</td>
                          <td>ASPARTATE TRANSAMINASE  (AST/SGOT)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>84</td>
                          <td>ASPERGILLUS FUMIGATUS Specific IgE</td>
                          <td>SERUM</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>85</td>
                          <td>AUTOIMMUNE HEPATITIS PANEL-1(ANA,SMA,AMA,LKM-1)</td>
                          <td>Blood - Serum</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>86</td>
                          <td>AUTOIMMUNE HEPATITIS PANEL-2(ANCA,SLA)</td>
                          <td>Blood - Serum</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>87</td>
                          <td>Acquired Hemophilia (PT INR, PTTK,DRVVT, Factor VIII, Inhibitors SCREEN, Bethesda Assay )</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>88</td>
                          <td>Acute Leukemia by Flowcytometry</td>
                          <td>Blood/Bone Marrow</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>89</td>
                          <td>Advance Metabolic Package</td>
                          <td>Blood &amp; Urine</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>90</td>
                          <td>Aldesterone/Plasma Renin Activity Ratio</td>
                          <td>Blood - Plasma</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>91</td>
                          <td>Amniotic Fluid by FISH 5 Probe</td>
                          <td>Amnioitic Fluid</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>92</td>
                          <td>Anti GM1 antibodies</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>93</td>
                          <td>Anti Histamine antiboby</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>94</td>
                          <td>Anti Insulin Antibodies</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>95</td>
                          <td>Anti Islet cell antibody</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>96</td>
                          <td>Anti MOG IgG Antibodies</td>
                          <td>SERUM</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>97</td>
                          <td>Anti Thrombin III Activity</td>
                          <td>Plasma-Citrated</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>98</td>
                          <td>Anti- LKM Antibodies  quantitative</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>99</td>
                          <td>Anti-Aquaporin-4/NMO Antibodies</td>
                          <td>CSF/Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>100</td>
                          <td>Anti-TPO (Anti- thyroid peroxidase antibodies)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>101</td>
                          <td>Antithrombin III Ag</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>102</td>
                          <td>Autoimmune Encephalitis Panel (NMDA, AMPA-GluR1, AMPA-GluR2, GABA B Receptor , LGI-1 Antibody , CASPR2 Antibody)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>103</td>
                          <td>B-CELL GENE REARRANGEMENT</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>104</td>
                          <td>B4 CH, CAH, GALT, G6PD       </td>
                          <td>Dry Blood Spot</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>105</td>
                          <td>BABY SHIELD PANEL (TMS 58 + GCMS)</td>
                          <td>Blood &amp; Urine</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>106</td>
                          <td>BACTERIOLOGICAL ANALYSIS OF WATER</td>
                          <td>Water</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>107</td>
                          <td>BACTERIOLOGICAL EXAMINATION OF AIR</td>
                          <td>Miscellaneous</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>108</td>
                          <td>BCR by ABL for qualitative PCR</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>109</td>
                          <td>BCR-ABL 1 KINASE DOMAIN MUTATION ANALYSIS(IRMA)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>110</td>
                          <td>BCR/abl QUANTITATIVE</td>
                          <td>Blood/Bone Marrow</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>111</td>
                          <td>BENCE JONES PROTEIN/ BJ PROTEIN (QUALITATIVE)</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>112</td>
                          <td>BETA -2- MICROGLOBULIN</td>
                          <td>Blood/Urine</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>113</td>
                          <td>BETA 2-CROSSLAPS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>114</td>
                          <td>BETA HCG   (INTACT BETA HUMAN CHORIONIC GONADOTROPIN)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>115</td>
                          <td>BETA-2 GLYCOPROTEIN  IGM</td>
                          <td>SERUM</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>116</td>
                          <td>BETA-2 GLYCOPROTEIN IGG</td>
                          <td>SERUM</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>117</td>
                          <td>BICARBONATE</td>
                          <td>Heparin-Plasma</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>118</td>
                          <td>BILIRUBIN (CORD BLOOD)</td>
                          <td>Blood-Cord</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>119</td>
                          <td>BIOFIRE BY PCR  MULTIPLEX</td>
                          <td>Stool</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>120</td>
                          <td>BIOLOGICAL INDICATOR FOR ETO STERILISATION TESTING</td>
                          <td>Spore Strip</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>121</td>
                          <td>BIOLOGICAL INDICATOR FOR STEAM STERILISATION</td>
                          <td>Spore Strip</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>122</td>
                          <td>BISMUTH</td>
                          <td>Blood/Urine/Urine - 24 Hours</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>123</td>
                          <td>BK VIRUS DNA QUANTITATIVE FOR BLOOD</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>124</td>
                          <td>BK VIRUS DNA QUANTITATIVE FOR URINE</td>
                          <td>Urine</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>125</td>
                          <td>BLEEDING TIME</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>126</td>
                          <td>BLOOD ALCOHOL LEVEL</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>127</td>
                          <td>BLOOD LYMPHO CULTURE (KARYOTYPING)</td>
                          <td>Blood</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>128</td>
                          <td>BLOOD UREA LEVEL</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>129</td>
                          <td>BONE MARROW ASPIRATION &amp; BIOPSY: PROCEDURE &amp; REPORTING</td>
                          <td>Bone Marrow/Tissue/Bouin Fluid</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>130</td>
                          <td>BONE MARROW ASPIRATION PROCEDURE &amp; REPORTING</td>
                          <td>Bone Marrow</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>131</td>
                          <td>BONE MARROW BIOPSY PROCEDURE AND REPORTING</td>
                          <td>Bone Marrow/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>132</td>
                          <td>BONE MARROW BIOPSY REPORTING</td>
                          <td>Bone Marrow</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>133</td>
                          <td>BRCA-1, BRCA-2  Somatic Mutation Analysis (Onquest Lab)</td>
                          <td>Tissue - Blocks</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>134</td>
                          <td>BRCA1 &amp; BRCA2 BY NGS</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>135</td>
                          <td>BREAST MARKER PROFILE (CA15.3, CEA)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>136</td>
                          <td>BRUCELLA- IgG ANTIBODY</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>137</td>
                          <td>BRUCELLA- IgM ANTIBODY</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>138</td>
                          <td>BUN- BLOOD UREA NITROGEN</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>139</td>
                          <td>BUN/Creatinine Ratio</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>140</td>
                          <td>BabyShield Panel  B (11 Tests)- (CH,CAH,G6PD,Galactosemia,PKU,Biotinidase,Sickle Cell Trait,Sickle Cell Disease,HB Variants,B-Thallasemia)</td>
                          <td>Blood/Dry Blood Spot</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>141</td>
                          <td>BabyShield Panel A  (7 Tests)  (-CH,CAH,G6PD, Galactosemia, PKU,Biotinidase)</td>
                          <td>Blood/Dry Blood Spot</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>142</td>
                          <td>BabyShield Panel D (TMS 53 Tests)</td>
                          <td>Blood/Dry Blood Spot</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>143</td>
                          <td>BabyShield Panel E ( TMS 57 Tests)</td>
                          <td>Dry Blood Spot/Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>144</td>
                          <td>Beta Thalassemia Mutation Analysis</td>
                          <td>Amnioitic Fluid</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>145</td>
                          <td>Bile Acid</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>146</td>
                          <td>Biopsy for (IgG, IgA , IgM ,C3) - Immunoflorescence</td>
                          <td>Tissue</td>
                          <td>1</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>147</td>
                          <td>Biotnidase Deficiency</td>
                          <td>Blood/Dry Blood Spot</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>148</td>
                          <td>Blood Grouping (Blood Bank)</td>
                          <td>Blood</td>
                          <td>1</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>149</td>
                          <td>Blood Lympho culture</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>150</td>
                          <td>Body Fluids For BioChemical Analysis-Fluid</td>
                          <td>BODY FLUID</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>151</td>
                          <td>Broth Dilution method for Nocardia</td>
                          <td>culture plate</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>152</td>
                          <td>C-PEPTIDE</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>153</td>
                          <td>C1 - Esterase Level</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>154</td>
                          <td>C3- COMPLEMENT 3</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>155</td>
                          <td>C4 - COMPLEMENT 4</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>156</td>
                          <td>CA-125</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>157</td>
                          <td>CA-15.3</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>158</td>
                          <td>CA-19.9</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>159</td>
                          <td>CA-72-4</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>160</td>
                          <td>CADMIUM</td>
                          <td>Blood/Urine - 24 Hours/Urine</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>161</td>
                          <td>CALCITONIN</td>
                          <td>Tissue - Blocks/Blood/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>162</td>
                          <td>CALCIUM (TOTAL)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>163</td>
                          <td>CANCER CYTOGENETICS</td>
                          <td>Blood - Na Heparin</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>164</td>
                          <td>CARBAMEZAPINE (TEGRETOL)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>165</td>
                          <td>CARDIAC ANHYDRASEIII</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>166</td>
                          <td>CATECHOLAMINES (ADRENELINE + NORADRENELINE) - BLOOD</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>167</td>
                          <td>CATECHOLAMINES (ADRENELINE +NORADRENELINE) - URINE</td>
                          <td>Urine - 24 Hours</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>168</td>
                          <td>CCA-242</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>169</td>
                          <td>CCP AB TO CYCLIC CITRULINATED PEPTIDE</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>170</td>
                          <td>CD 19</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>171</td>
                          <td>CD 20 </td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>172</td>
                          <td>CD120 A</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>173</td>
                          <td>CD120 B</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>174</td>
                          <td>CD154</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>175</td>
                          <td>CD16</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>176</td>
                          <td>CD16B</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>177</td>
                          <td>CD22</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>178</td>
                          <td>CD25</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>179</td>
                          <td>CD3 </td>
                          <td>Tissue in 10 % Formalin/Blood/Tissue - Blocks</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>180</td>
                          <td>CD33</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>181</td>
                          <td>CD34 &amp; VIABILITY TESTING</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>182</td>
                          <td>CD4 COUNT</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>183</td>
                          <td>CD4/CD8COUNT</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>184</td>
                          <td>CD40</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>185</td>
                          <td>CD52</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>186</td>
                          <td>CEA- CARCINO EMBRYONIC ANTIGEN</td>
                          <td>Blood - Serum</td>
                          <td>3</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>187</td>
                          <td>CERULOPLASMIN</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>188</td>
                          <td>CF/TRYPSINOGEN                        </td>
                          <td>Dry Blood Spot</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>189</td>
                          <td>CFH ANTIBODY</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>190</td>
                          <td>CH-50 (COMPLEMENT TOTAL)</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>191</td>
                          <td>CHIKUNGUNYA  IgM ANTIBODIES</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>192</td>
                          <td>CHIKUNGUNYA RNA PCR</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>193</td>
                          <td>CHLAMYDIA PNEUMONIAE-IgM ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>194</td>
                          <td>CHLAMYDIA TRACHOMATIS -IgG ABS -BLOOD</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>195</td>
                          <td>CHLORIDES</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>196</td>
                          <td>CHLYMADIA PCR</td>
                          <td>Urethral Swab/GENITAL SWAB/Eye Swab/Urine/Pus</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>197</td>
                          <td>CHOLESTEROL- TOTAL</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>198</td>
                          <td>CHOLINESTERASE</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>199</td>
                          <td>CHROMIUM</td>
                          <td>Blood/Urine/Urine - 24 Hours/Urine - 24 Hours</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>200</td>
                          <td>CHROMOGRANIN A</td>
                          <td>Tissue in 10% Formalin - Blocks/Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>201</td>
                          <td>CHROMOSOMAL ANALYSIS (GIEMASA BANDING) (G BANDING)(FOR NUMERICAL &amp; STRUCTURAL CHROMOSOMAL ABNORMILITIES - AMNIOTIC FLUID</td>
                          <td>Blood - Na Heparin</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>202</td>
                          <td>CHROMOSOMAL ANALYSIS - HIGH RESOLUTION BANDING - WHOLE BLOOD</td>
                          <td>Blood - Na Heparin</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>203</td>
                          <td>CHRONIC LYMPHOPROLIFERATIVE DISORDER BY FISH METHOD (CLPD by Fish)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>204</td>
                          <td>CHRONIC LYMPHOPROLIFERATIVE DISORDER PANEL</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>205</td>
                          <td>CHYLOMICRON (QUALITATIVE) - URINE-SPOT</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>206</td>
                          <td>CK-MB (CREATINE KINASE MB )</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>207</td>
                          <td>CLINICAL EXOME/ WHOLE EXOME</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>MONTH</td>
                        </tr>
                        <tr>
                          <td>208</td>
                          <td>CLL Diagnostic Panel (Comprehensive) (Flowcytometry)</td>
                          <td>Bone Marrow</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>209</td>
                          <td>CLL PANEL by FISH (13q14.3,17p13.1,11q22.3 deletionsand Trisomy 12)(SRL)</td>
                          <td>Bone Marrow</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>210</td>
                          <td>CLOSTRIDIOIDES DIFFICILE REAL TIME PCR</td>
                          <td>Stool</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>211</td>
                          <td>CMV VIRAL LOAD</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>212</td>
                          <td>COBALT</td>
                          <td>Urine - 24 Hours/urine/blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>213</td>
                          <td>COLD AGGLUTINATION TEST</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>214</td>
                          <td>COMPLETE DIAGNOSIS WITH SPECIAL STAINS &amp; IHC MARKER</td>
                          <td>Parafin Block</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>215</td>
                          <td>COMPREHENSIVE ALLERGY PANEL ADULT</td>
                          <td>Blood.</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>216</td>
                          <td>COMPREHENSIVE COLORECTAL CANCER(K-RAS/NRAS/BRAF BY ARMS PCR)(ONCQUEST LAB SMO10467)</td>
                          <td>Block</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>217</td>
                          <td>COMPREHENSIVE MYELOMA PROTEIN PANELPROTEIN ELECTROPHORESIS, SERUM(TOTAL PROTEIN,ALBUMIN,ALPHA 1 ,ALPHA 2,BETA,GAMMA,MYELOMA BAND ,KAPPA BAND ,LAMBDA BAND,LAMBDA BAND(IgG, IgM, IgA)SERUM LIGHT CHAINS (</td>
                          <td>SERUM</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>218</td>
                          <td>CONGO RED FOR HISTOPATHOLOGY</td>
                          <td>Tissue - Blocks/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>219</td>
                          <td>COPPER</td>
                          <td>Blood/Urine - 24 Hours</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>220</td>
                          <td>COPPER (SPOT URINE)</td>
                          <td>Urine - Random</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>221</td>
                          <td>CORTISOL (RANDOM)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>222</td>
                          <td>CORTISOL AM</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>223</td>
                          <td>CORTISOL PM</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>224</td>
                          <td>COUPLE KARYOTYPING - (PBLC)</td>
                          <td>Blood</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>225</td>
                          <td>COXSACKIE ABS -IgG</td>
                          <td>Blood/CSF-Spinal/CSF-Ventricular</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>226</td>
                          <td>COXSACKIE ABS -IgM</td>
                          <td>CSF-Ventricular/Blood/CSF-Spinal</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>227</td>
                          <td>CPK ( CREATINE KINASE )</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>228</td>
                          <td>CREATININE (BODY FLUID)</td>
                          <td>CAPD FLUID - 0 Hr/CAPD FLUID-2 Hr/CAPD FLUID-4 Hr/CAPD FLUID-12 Hr/CAPD Fluid/Urine-Random/CAPD FLUID 24 hour/BODY FLUID/CAPD FLUID-1 Hr/Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>229</td>
                          <td>CREATININE (SERUM)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>230</td>
                          <td>CRP (C-REACTIVE PROTEIN)- Full Range</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>231</td>
                          <td>CRYOGLOBULINS</td>
                          <td>Blood - Serum</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>232</td>
                          <td>CRYPTOCOCCUS ANTIGEN(QUALITATIVE)</td>
                          <td>CSF-Spinal/CSF-Ventricular/Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>233</td>
                          <td>CSF GLUCOSE</td>
                          <td>CSF</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>234</td>
                          <td>CSF PROTEIN</td>
                          <td>CSF</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>235</td>
                          <td>CUTTING ONE PARAFFIN BLOCK,STAINING AND PREPARATION OF 1 HE SLIDE</td>
                          <td>Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>236</td>
                          <td>CYCLOSPORIN LEVEL</td>
                          <td>Whole Blood Heparin</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>237</td>
                          <td>CYTOGENETICS : PRODUCT OF CONCEPTION (POC)</td>
                          <td>Tissue</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>238</td>
                          <td>CYTOGENETICS FOR AZFa, AZFb, AZFc</td>
                          <td>Blood - Na Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>239</td>
                          <td>CYTOGENETICS FOR BETA THALASSEMIA (ANALYSIS OF COMPLETE SET OF 16 LOCI)</td>
                          <td>Blood - Na Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>240</td>
                          <td>CYTOGENETICS FOR FRAGILE X</td>
                          <td>Blood - Na Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>241</td>
                          <td>CYTOGENETICS FOR MUSCULAR DYSTROPHY(DETECTION OF FOT SPOT EXON 25 NUMBERS FOR DMD)</td>
                          <td>Blood - Na Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>242</td>
                          <td>CYTOGENETICS FOR PHILADELPHIA CHROMOSOME (FOR CHRONIC MYELOID LEUKAEMIA -CML)</td>
                          <td>Blood - Na Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>243</td>
                          <td>CYTOGENETICS-INV(16) by fish method</td>
                          <td>Bone Marrow</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>244</td>
                          <td>CYTOGENETICS: Blood Lympho culture (FISH)</td>
                          <td>Whole Blood Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>245</td>
                          <td>CYTOGENETICS: MDS PANEL by FISH method</td>
                          <td>Bone Marrow/Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>246</td>
                          <td>CYTOLOGY</td>
                          <td>Brushing Slides</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>247</td>
                          <td>CYTOLOGY-FLUID FOR CYTOSPIN(2 SLIDES)</td>
                          <td>Cyst Fluid</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>248</td>
                          <td>CYTOLOGY-FLUID FOR ROUTINE CYTOLOGY</td>
                          <td>CBD Fluid</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>249</td>
                          <td>CYTOMEGALOVIRUS DNA DETECTOR PCR</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>250</td>
                          <td>Calprotectin</td>
                          <td>Stool</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>251</td>
                          <td>Chlamydia Trachomatis - IgM  Abs</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>252</td>
                          <td>Chromosomal  (Fanconi&#39;s Anaemia)</td>
                          <td>Blood</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>253</td>
                          <td>Chromosome Analysis - Heamtological Malignancy (Onquest Lab)</td>
                          <td>Blood</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>254</td>
                          <td>Chronic Lymphoproliferative Disorder Panel</td>
                          <td>BODY FLUID/Pleural Fluid/Blood/Bone Marrow</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>255</td>
                          <td>Citrate Urine (24 hr Enzymateic)</td>
                          <td>Urine - 24 Hours</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>256</td>
                          <td>Cortisol (Urine -24 Hours)</td>
                          <td>Urine - 24 Hours</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>257</td>
                          <td>Cystic Fibrosis Mutation Studies </td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>258</td>
                          <td>Cytogenetics Studies-Haematoligical Disorders</td>
                          <td>BODY FLUID/Blood/Bone Marrow</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>259</td>
                          <td>D-DIMER</td>
                          <td>Whole Blood Citrate/Plasma-Citrated</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>260</td>
                          <td>D3-HYDROXYBUTYRATE(RANBUT)(KETONE)</td>
                          <td>Blood - Serum</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>261</td>
                          <td>DCP-DECARBOXY PROTHROMBIN PIVKA-II</td>
                          <td>Plasma</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>262</td>
                          <td>DESMIN </td>
                          <td>Tissue in 10 % Formalin/Tissue - Blocks</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>263</td>
                          <td>DHEAs (DEHYDROEPIANDROSTERONE SULPHATE)</td>
                          <td>Blood - Serum</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>264</td>
                          <td>DHT- DI HYDRO TESTOSTERONE</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>265</td>
                          <td>DIGOXIN</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>266</td>
                          <td>Dengue Antibody (IgG)</td>
                          <td>Blood</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>267</td>
                          <td>Dengue Antibody (IgM)</td>
                          <td>Blood</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>268</td>
                          <td>Dengue Antigen (NS1)</td>
                          <td>Blood</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>269</td>
                          <td>EBV (VCA) IgM ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>270</td>
                          <td>EBV(VCA) IGG ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>271</td>
                          <td>ECCHINOCOCCUS (HYDATID CYST) - IgG</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>272</td>
                          <td>ECHOVIRUS ABS -IgG</td>
                          <td>Blood/CSF-Spinal/CSF-Ventricular</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>273</td>
                          <td>ECHOVIRUS ABS -IgM</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>274</td>
                          <td>EGF- EPIDERMAL GROWTH FACTOR</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>275</td>
                          <td>EGFR  MUTATION DETECTION</td>
                          <td>Tissue</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>276</td>
                          <td>EGFR (BLOOD)(ONCQUEST)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>277</td>
                          <td>ENDOMYSIAL ABS</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>278</td>
                          <td>EPSTEIN-BARR VIRUS (EBV) DNA PCR</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>279</td>
                          <td>ERYTHROPOIETIN</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>280</td>
                          <td>ESR</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>281</td>
                          <td>ESTRADIOL(E2)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>282</td>
                          <td>Entamoeba Histolytica Antibodies</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>283</td>
                          <td>Extended RAS Testing (exons 2,3,4 of KRAS &amp; NRAS)</td>
                          <td>Biopsy</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>284</td>
                          <td>FABP -FATTY ACID BINDING PROTEIN (CARDIAC RISK MARKWER)</td>
                          <td>Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>285</td>
                          <td>FACTOR 13</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>286</td>
                          <td>FACTOR IX ACTIVITY</td>
                          <td>Whole Blood Citrate</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>287</td>
                          <td>FACTOR V LEIDEN, MUTANT DETECTION</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>288</td>
                          <td>FACTOR VII</td>
                          <td>Whole Blood Citrate</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>289</td>
                          <td>FACTOR VIII ACTIVITY</td>
                          <td>Blood - Citrated</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>290</td>
                          <td>FACTOR XI FUNCTIONAL</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>291</td>
                          <td>FACTOR XII FUNCTIONAL</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>292</td>
                          <td>FASTING BLOOD GLUCOSE</td>
                          <td>Fluoride-Plasma</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>293</td>
                          <td>FASTING URINE GLUCOSE</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>294</td>
                          <td>FC GAMMA R2 RECEPTOR</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>295</td>
                          <td>FC GAMMA R3a RECEPTOR</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>296</td>
                          <td>FERRITIN</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>297</td>
                          <td>FGFR </td>
                          <td>Whole Blood Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>298</td>
                          <td>FIBRINOGEN LEVEL</td>
                          <td>Whole Blood Citrate/Plasma-Citrated</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>299</td>
                          <td>FINE NEEDLE ASPIRATION CYTOLOGY  (FNAC)-BREAST /LYMPH NODE/THYROID etc ( SPECIFY)</td>
                          <td>FNAC Material</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>300</td>
                          <td>FIP1 L1-PDGFRa RT PCR</td>
                          <td>Whole Blood EDTA</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>301</td>
                          <td>FISH FOR AML(M2, M3, M4)(INCLUDES t(15;17), T(8;21), INV(16)</td>
                          <td>Blood - Na Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>302</td>
                          <td>FISH FOR CYCLIN D1</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>303</td>
                          <td>FISH FOR DEL 13q FOR MULTIPLE MYELOMA)</td>
                          <td>Blood - Na Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>304</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>305</td>
                          <td>FISH FOR INV 16 FOR (ACUTE MYELOID LEUKEAMIA AML M4)</td>
                          <td>Blood - Na Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>306</td>
                          <td>FISH FOR MULTIPLE MYELOMA ( 5 PROBES)</td>
                          <td>Bone Marrow/Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>307</td>
                          <td>FISH FOR PRADER WILLI SYNDROME(SAHYADRI LAB)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>308</td>
                          <td>FISH FOR T (15;17) FOR (PROMYELOCYTIC LEUKAEMIA (PML/RARA/ AMLM3))</td>
                          <td>Bone Marrow/Blood - Na Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>309</td>
                          <td>FISH FOR t (8;21) FOR (ACUTE MYELOID  LEUKAEMIA AML M2)</td>
                          <td>Bone Marrow/Blood - Na Heparin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>310</td>
                          <td>FISH FOR t (9;22) FOR (BCR-ABL TRANSLOCATION OF PHILADELPHIA CHROMOSOMES)</td>
                          <td>Blood - Na Heparin/Bone Marrow</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>311</td>
                          <td>FISH SRY GENE</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>312</td>
                          <td>FITE STAIN FOR HISTOPATHOLOGY</td>
                          <td>Tissue in 10 % Formalin/Tissue - Blocks</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>313</td>
                          <td>FLOW CROSS MATCH</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>314</td>
                          <td>FLUID BETA -2 TRANSFERRIN</td>
                          <td>NASAL FLUID (CSF LEAKAGE) AND SERUM</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>315</td>
                          <td>FLUID FOR CRYSTALS</td>
                          <td>Synovial Fluid</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>316</td>
                          <td>FOLATE (SERUM)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>317</td>
                          <td>FOOD ANALYSIS BACTERIOLOGICAL </td>
                          <td>Miscellaneous</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>318</td>
                          <td>FREE ANDROGEN (FAI)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>319</td>
                          <td>FREE PSA (PROSTATIC SPECIFIC ANTIGEN-FREE MOLOCULE)</td>
                          <td>Blood - Serum</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>320</td>
                          <td>FREE TESTOSTERONE</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>321</td>
                          <td>FROZEN SECTION NON NEUROSURGICAL ( 1ST SPECIMEN)</td>
                          <td>Tissue</td>
                          <td>1</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>322</td>
                          <td>FS + MS,B6  (51 Disorders)</td>
                          <td>New Born Card</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>323</td>
                          <td>FS MS,B4  (49 Disorders) </td>
                          <td>New Born Card</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>324</td>
                          <td>FSH (FOLLICLE STIMULATING HORMONE)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>325</td>
                          <td>FTA- ABS (IgG ABS TO TRREPONEMA)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>326</td>
                          <td>FUNGAL CULTURE &amp; SENSITIVITY</td>
                          <td>T.T SECRETION</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>327</td>
                          <td>Factor H Antibody</td>
                          <td>SERUM</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>328</td>
                          <td>Fish for 5 porbes</td>
                          <td>Amnioitic Fluid</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>329</td>
                          <td>Freidreichs Ataxia mutation analysis</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>330</td>
                          <td>G6PD (QUALITATIVE)</td>
                          <td>Whole Blood EDTA</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>331</td>
                          <td>G6PD ASSAY (QUANTITATIVE)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>332</td>
                          <td>G6PD MUTATION ANALYSIS</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>333</td>
                          <td>GAD - 65</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>334</td>
                          <td>GALACTOMANNAN</td>
                          <td>BAL</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>335</td>
                          <td>GALACTOSE QUANTITATIVE PLASMA</td>
                          <td>Blood - Plasma</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>336</td>
                          <td>GALNS gene sequencing(Life Cell)</td>
                          <td>Blood.</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>337</td>
                          <td>GAMMA GLUTAMYL TRANSFERASE (GGT)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>338</td>
                          <td>GAS CHROMATOGRAPHY- MASS SPECTROPHOTOMETRY</td>
                          <td>Urine</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>339</td>
                          <td>GASTRIC PARIETAL CELL ABS</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>340</td>
                          <td>GASTRIN</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>341</td>
                          <td>GBM – Anti Glomerular Basement Membrane IgG Antibodies</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>342</td>
                          <td>GCMS</td>
                          <td>Urine</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>343</td>
                          <td>GCT-GLUCOSE CHALLENGE TEST</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>344</td>
                          <td>GLIADIN -IgA ABS</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>345</td>
                          <td>GLIADIN -IgG ABS</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>346</td>
                          <td>GLOBULIN</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>347</td>
                          <td>GLUCOGEN STIMULATING TEST FOR C- PEPTIDE TEST</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>348</td>
                          <td>GLUCOSE (BODY FLUID)</td>
                          <td>CSF/Drain Fluid/CAPD FLUID - 0 Hr/CAPD FLUID-1 Hr/CAPD FLUID-2 Hr/CAPD FLUID-4 Hr/CAPD FLUID- 8 HOURS/CAPD FLUID- 10 Hr/CAPD FLUID-12 Hr/CAPD FLUID 24hour/Drain Fluid/BODY FLUID</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>349</td>
                          <td>GLUTAMATE LEVEL -1</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>350</td>
                          <td>GLYCINE </td>
                          <td>CSF and Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>351</td>
                          <td>GLYCOGEN PHOSPHORYLASE (CARDIAC RISK MARKER)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>352</td>
                          <td>GLYCOSYLATED  HEMOGLOBIN (HbA1C)</td>
                          <td>Whole Blood EDTA</td>
                          <td>8</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>353</td>
                          <td>GRAMS STAIN</td>
                          <td>Drain Fluid</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>354</td>
                          <td>GROWTH HORMONE</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>355</td>
                          <td>GROWTH HORMONE STIMULATING TEST</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>356</td>
                          <td>Galactosemia (Total Galactose+Galt Enzyme)</td>
                          <td>Whole Blood Heparin/Dry Blood Spot/Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>357</td>
                          <td>Ganglioside IgG Antibody (GOLWILKAR LAB)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>358</td>
                          <td>Ganglioside IgM Antibody(GOLWILKAR LAB)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>359</td>
                          <td>Genotype MTBDR plus</td>
                          <td>Tissue/BODY FLUID/Blood/Sputum/CSF/Pus/Broncheoalveolar Lavage/FNAC Material</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>360</td>
                          <td>Germline panal for Hereditary non polyposis carcinoma (HNPCC)/LYNCH Syndrome (Next generation sequencing of EPCAM,MLH1,MSH2,MSH6 and PMS2)</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>361</td>
                          <td>Giemsa Stain (Histopathology)</td>
                          <td>Tissue</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>362</td>
                          <td>Glutamic Acid Decarboxylase (GAD) IgG</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>363</td>
                          <td>GnRH STIMULATING TEST (BASA AND 30,60,90,120,MINUTES SAMPLE AFTER iv GnRH INJECTION FOR FSH, LH TESTS, (DOSE=-2.5ug/Kg OF BODY WEIGHT</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>364</td>
                          <td>HAEMOGLOBIN</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>365</td>
                          <td>HAM TEST</td>
                          <td>Whole Blood EDTA</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>366</td>
                          <td>HAPTOGLOBULIN</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>367</td>
                          <td>HBDH</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>368</td>
                          <td>HBV TOTAL(HBV VIRAL LOAD+CBC+LFT)</td>
                          <td>Blood - Serum &amp; Plasma</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>369</td>
                          <td>HBsAg</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>370</td>
                          <td>HCV</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>371</td>
                          <td>HCV (VIRAL LOAD)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>372</td>
                          <td>HCV GENOTYPING</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>373</td>
                          <td>HCV QUALITATIVE PCR</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>374</td>
                          <td>HCV RNA Quantitative (CGHS)</td>
                          <td>Whole Blood EDTA</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>375</td>
                          <td>HDL CHOLESTEROL  (High Density Lipoprotein Cholesterol)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>376</td>
                          <td>HDL/LDL ratio</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>377</td>
                          <td>HDL: TG Ratio</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>378</td>
                          <td>HDV ABS</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>379</td>
                          <td>HEAVY METALS PROFILE-1(LEAD,MERCURY,CADIUM,CHROMIUM,COBAIT,ARSENIC,ALUMINIUM,SELENIUM,COPPER,ZINC,NICKEL)</td>
                          <td>Blood - Serum</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>380</td>
                          <td>HEINZ BODY</td>
                          <td>Whole Blood EDTA</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>381</td>
                          <td>HELICOBACTER PYLORI -IgA ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>382</td>
                          <td>HELICOBACTER PYLORI -IgM</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>383</td>
                          <td>HEMOLYTIC UREMIC SYNDROME(CFH,CFHR1 &amp; CFHR3) DELETION DUPLICATION ANALYSIS</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>384</td>
                          <td>HEPATITIS B CORE TOTAL ANTIBODIES</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>385</td>
                          <td>HEPATITIS B SURFACE ANTIBODIES (HBsAb) TOTAL WITH TITRE</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>386</td>
                          <td>HEPATITIS B VIRUS CORE IgM ANTIBODIES</td>
                          <td>SERUM</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>387</td>
                          <td>HEPATITIS Be VIRUS ANTIGEN / ANTIBODY EVALUATION(ENVELOP)</td>
                          <td>Blood - Serum</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>388</td>
                          <td>HEV IgM ABS</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>389</td>
                          <td>HISTONE ABS</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>390</td>
                          <td>HISTOPATHOLOGY (LARGE SPECIMEN)</td>
                          <td>Tissue in 10 % Formalin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>391</td>
                          <td>HISTOPATHOLOGY (MEDIUM SPECIMEN)</td>
                          <td>Gall Bladder/Tissue in 10 % Formalin/Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>392</td>
                          <td>HISTOPATHOLOGY (SMALL SPECIMEN)</td>
                          <td>SMALL BIOPSY-1/Biopsy</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>393</td>
                          <td>HISTOPATHOLOGY-ADDITIONAL SLIDE (PER SLIDE)</td>
                          <td>Parafin Block</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>394</td>
                          <td>HISTOPATHOLOGY-BLOCK AND SLIDE PREPARATION ONLY (EACH BLOCK+SLIDE)</td>
                          <td>Tissue</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>395</td>
                          <td>HIV</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>396</td>
                          <td>HIV GENOTYPING RESISTANCE</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>397</td>
                          <td>HIV-1 VIRAL LOAD BY REAL TIME PCR</td>
                          <td>CSF</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>398</td>
                          <td>HIV1 RNA DETECTION QUALITATIVE PCR</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>399</td>
                          <td>HLA  DSA (DONAR SPECIFIC IgG ANTIBODIES)  CLASS I &amp; II</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>400</td>
                          <td>HLA -DQB LOCUS</td>
                          <td>Blood - ACD</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>401</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>402</td>
                          <td>HLA B*5701 GENOTYPING ABACAVIR HYPERSENSITIVITY,B(SRL)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>403</td>
                          <td>HLA B27 BY FLOWCYTOMETRY</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>404</td>
                          <td>HLA B27 by PCR</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>405</td>
                          <td>HLA DQ2/HLA DQ8</td>
                          <td>Blood</td>
                          <td>57</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>406</td>
                          <td>HLA TYPING ABDR (1 INDIVIDUAL )</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>407</td>
                          <td>HLA TYPING ABDR (2 INDIVIDUAL  DONOR &amp;  RECIPIENT) </td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>408</td>
                          <td>HLA TYPING HIGH RESOLUTION TEST</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>409</td>
                          <td>HLA Tissue Cross matching</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>410</td>
                          <td>HOMOCYSTEINE</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>411</td>
                          <td>HOMOCYSTEINE(URINE)(QUALITATIVE)</td>
                          <td>Urine - Random</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>412</td>
                          <td>HPE BLOCK PROCESSING</td>
                          <td>Tissue - Blocks</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>413</td>
                          <td>HPV DNA PCR</td>
                          <td>Vaginal Swab</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>414</td>
                          <td>HSV 1 IgM ABS ELISA</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>415</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>416</td>
                          <td>HTLV I &amp; II ANTIBODIES</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>417</td>
                          <td>HYPERSNSITIVITY PNEUMONITS PANEL</td>
                          <td>SERUM</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>418</td>
                          <td>Haemosiderin</td>
                          <td>Sputum</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>419</td>
                          <td>IA-2 ANTIBODY</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>420</td>
                          <td>IGF BINDING PROTEIN-3</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>421</td>
                          <td>IGF-1(SOMATOMEDINE C)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>422</td>
                          <td>IL-10 </td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>423</td>
                          <td>IL-2</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>424</td>
                          <td>IL-3</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>425</td>
                          <td>IL-4</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>426</td>
                          <td>IL-5</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>427</td>
                          <td>IL-6 (*INTERLEUKIN-6)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>428</td>
                          <td>IL-8</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>429</td>
                          <td>IMMATURE PLATELET FRACTION(IPF)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>430</td>
                          <td>IMMUNOCHROMATOGRAPHY FOR KALA AZAR</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>431</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC)  -3 MARKER</td>
                          <td>Parafin Block</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>432</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) - 5 MARKER</td>
                          <td>Tissue</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>433</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody  C 4</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>434</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody  FL - 1</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>435</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody  GCDFP 15</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>436</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody  MYOGENIN</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>437</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody  NAPSIN A</td>
                          <td>SMALL BIOPSY-1/Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>438</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody  OCT - 3/4</td>
                          <td>SMALL BIOPSY-1/Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>439</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody AFP</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>440</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody BCL 2</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>441</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody BER EP 4</td>
                          <td>SMALL BIOPSY-1/Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>442</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody BETA-CATENIN</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>443</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CA 125</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>444</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CALDESMON</td>
                          <td>SMALL BIOPSY-1/Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>445</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CALPOLIN</td>
                          <td>SMALL BIOPSY-1/Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>446</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CALRETENIN</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>447</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 10</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>448</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 117 (C KIT)</td>
                          <td>SMALL BIOPSY-1/Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>449</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 138</td>
                          <td>SMALL BIOPSY-1/Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>450</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 15</td>
                          <td>SMALL BIOPSY-1/Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>451</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 20</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>452</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 21</td>
                          <td>SMALL BIOPSY-1/Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>453</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 23</td>
                          <td>Biopsy/SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>454</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 246</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>455</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 3</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>456</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 30</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>457</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 31</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>458</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 34</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>459</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 43</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>460</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 45 (LCA)</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>461</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 5</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>462</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 57</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>463</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 68</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>464</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 7</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>465</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 79 A</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>466</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 8</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>467</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD 99</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>468</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CD X2</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>469</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CEA</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>470</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CHROMOGRANIN</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>471</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CK 19</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>472</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CK 20</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>473</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CK 5/6</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>474</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CMV</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>475</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody CYCLINE D1</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>476</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody DESMIN</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>477</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody E - CADHERIN</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>478</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody EMA</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>479</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody ER</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>480</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody GFAP</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>481</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody GLPICAN - 3</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>482</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody HEPATOCYTES</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>483</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody INHIBIN</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>484</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody KAPPA</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>485</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody LAMBDA</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>486</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody MELAN - A</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>487</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody MIB - 1</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>488</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody MOC - 1</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>489</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody MPO</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>490</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody NFP</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>491</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody P 53</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>492</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody P 63</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>493</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody PAX 5</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>494</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody PAX 8</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>495</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody PLAP</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>496</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody PR</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>497</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody PSA</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>498</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody S - 100</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>499</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody SMA</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>500</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody SV 40</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>501</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody SYNAPTOPHYSIN</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>502</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody THYROGLOBULIN</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>503</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody TTF - 1</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>504</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody TdT</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>505</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody VIMENTIN</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>506</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) INDIVIDUAL MARKERS-Primary Antibody WT - 1</td>
                          <td>SMALL BIOPSY-1</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>507</td>
                          <td>IMMUNOHISTOCHEMISTRY (IHC) PANEL -BREAST PANEL 2(ER-PR)</td>
                          <td>Tissue/Paraffin Block</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>508</td>
                          <td>IMMUNOPHENOTYPING</td>
                          <td>Bone Marrow</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>509</td>
                          <td>INHIBIN B</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>510</td>
                          <td>INSULIN (POST PRANDIAL)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>511</td>
                          <td>INSULIN ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>512</td>
                          <td>INSULIN FASTING</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>513</td>
                          <td>INSULIN LIKE GROWTH FACTOR -1 (IGF-1)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>514</td>
                          <td>INTRINSIC FACTOR ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>515</td>
                          <td>IONIC CALCIUM</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>516</td>
                          <td>IRON</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>517</td>
                          <td>IRON STAIN</td>
                          <td>Biopsy</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>518</td>
                          <td>IgA</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>519</td>
                          <td>IgA, IgM, IgG IMMUNOGLOBULIN (Quantitative)</td>
                          <td>Blood/CSF</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>520</td>
                          <td>IgD HEAVY CHAIN(SURFACE)</td>
                          <td>Whole Blood EDTA</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>521</td>
                          <td>IgE</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>522</td>
                          <td>IgG</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>523</td>
                          <td>IgG CSF </td>
                          <td>CSF-Spinal</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>524</td>
                          <td>IgG type 4</td>
                          <td>Blood/Parafin Block</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>525</td>
                          <td>IgM</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>526</td>
                          <td>Immune Deficiency Panel-I (CD3,CD4,CD8,CD19)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>527</td>
                          <td>Immunofixation  Electrophoresis (24 hrs urine)</td>
                          <td>Urine - 24 Hours</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>528</td>
                          <td>Immunofixation  Electrophoresis(IFE)-serum</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>529</td>
                          <td>Immunohistochemisty (4 Marker)</td>
                          <td>Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>530</td>
                          <td>Immunophenotype for Acute Leukemia Panel</td>
                          <td>Blood/Bone Marrow</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>531</td>
                          <td>Isoenzyme  Alkaline  Phosphatase-serum</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>532</td>
                          <td>JAK2 Exon 12 mutations</td>
                          <td>Blood</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>533</td>
                          <td>JAK2 V617F MUTATION DETECTION</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>534</td>
                          <td>JAPANESE  ENCEPHALITIS DETECTION</td>
                          <td>Blood/CSF-Spinal</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>535</td>
                          <td>JO-1 ABS</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>536</td>
                          <td>KAPPA/ LAMBDA LIGHT CHAINS</td>
                          <td>Blood/Urine-Random/Urine - 24 Hours/Tissue - Blocks/Tissue in 10 % Formalin</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>537</td>
                          <td>KINSHIP ANALYSIS (DONOR AND RECEIPIENT) (SRL)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>538</td>
                          <td>KOH MOUNT FOR FUNGUS</td>
                          <td>BODY FLUID/CONTACT LENSE</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>539</td>
                          <td>Karyotyping  (giemsa  banding)  (G Banding) -Bone Marrow</td>
                          <td>Bone Marrow Slides</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>540</td>
                          <td>Karyotyping -Aminiotic Fluid - Sahayadri lab</td>
                          <td>Amnioitic Fluid</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>541</td>
                          <td>Kidney (Renal)  Biopsy for  Electron Microscopy (EM)</td>
                          <td>Kidney Biopsy</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>542</td>
                          <td>Kidney Biopsy Native(LM+IF+REFLEX 2 PLA2R)(SRL)</td>
                          <td>Tissue</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>543</td>
                          <td>LACTATE-CSF</td>
                          <td>CSF</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>544</td>
                          <td>LAMOTRIGINE</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>545</td>
                          <td>LAP Score </td>
                          <td>Smear</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>546</td>
                          <td>LDH - LACTATE DEHYDROGENASE (BODY FLUID)</td>
                          <td>Pleural Fluid</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>547</td>
                          <td>LDH ISOENZYMES</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>548</td>
                          <td>LDH LACTATE DEHYDROGENASE (SERUM)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>549</td>
                          <td>LDL CHOLESTEROL  ( Low Density Lipoprotein Cholesterol))</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>550</td>
                          <td>LDL/VLDL Ratio</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>551</td>
                          <td>LEAD</td>
                          <td>Blood/Urine/Urine - 24 Hours</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>552</td>
                          <td>LEGIONELLA PNEUMOPHILA ANTIGEN DETECTION- URINE</td>
                          <td>Urine</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>553</td>
                          <td>LEPTIN</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>554</td>
                          <td>LEPTOSPIRA -IgG ABS</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>555</td>
                          <td>LEPTOSPIRA -IgM ABS</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>556</td>
                          <td>LEUKEMIA TRANSLOCATION PANEL 1 (t(1;19) (q23;p13), Inv(16)(p13;q22), t(9;22) (q34;q11), t(4;11) (q21;q23), t(12;21) (p13;q22), t(15;17)(q22;q22), t(8;21)(q22;q22))</td>
                          <td>Whole Blood EDTA/Bone Marrow</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>557</td>
                          <td>LH (LEUTINISING HORMONE)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>558</td>
                          <td>LIPASE LEVEL</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>559</td>
                          <td>LIPID PROFILE MINI</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>560</td>
                          <td>LIPOPROTEIN (a)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>561</td>
                          <td>LIPOPROTEIN ELECTROPHORESIS</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>562</td>
                          <td>LITHIUM LEVEL</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>563</td>
                          <td>LIVER BIOPSY WOTH RETICULINE &amp; TRICHROME STAIN</td>
                          <td>Tissue - Blocks/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>564</td>
                          <td>LIVER FUNCTION TEST MINI</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>565</td>
                          <td>LIVER-BIOPSY</td>
                          <td>Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>566</td>
                          <td>LKM-1- ABS TO LIVER KIDNEY MICROSOMES</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>567</td>
                          <td>LUPUS ANTICOAGULANT (LAC) SCREEN</td>
                          <td>Whole Blood Citrate</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>568</td>
                          <td>LYMPHOCTYE ENUMERATION , BASIC &amp; NK CELLS</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>569</td>
                          <td>LYMPHOMA MARKER PANEL</td>
                          <td>Tissue in 10 % Formalin/Tissue - Blocks/BODY FLUID</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>570</td>
                          <td>La ABS SSB (SOLUBLE SUBSTANCE B) </td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>571</td>
                          <td>Leukemia Translocation Panel- 6</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>572</td>
                          <td>Lymphocyte Enumeration Basic</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>573</td>
                          <td>Lymphocytes subset analysis (flowcytometry)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>574</td>
                          <td>MAGNESIUM (SERUM)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>575</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>576</td>
                          <td>MALARIAL PARASITE</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>577</td>
                          <td>MANGANESE</td>
                          <td>Urine - 24 Hours/Urine spot/Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>578</td>
                          <td>MASSONTRICHROME STAIN FOR HISTOPATHOLOGY </td>
                          <td>Tissue - Blocks/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>579</td>
                          <td>MCP-1 </td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>580</td>
                          <td>MDS- PANEL - CHROMOSOMES 5q, 7q, 8q &amp; 20q</td>
                          <td>Blood/Bone Marrow</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>581</td>
                          <td>MEASLES IGG ABS</td>
                          <td>Blood/CSF</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>582</td>
                          <td>MERCURY</td>
                          <td>Blood/Urine/Urine - 24 Hours</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>583</td>
                          <td>METHADOLE (QUANTITATIVE)</td>
                          <td>Urine</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>584</td>
                          <td>METHHEMOGLOBIN DETECTION</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>585</td>
                          <td>METHOTREXATE</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>586</td>
                          <td>METHYLMALONIC ACID (URINE MMA)</td>
                          <td>Urine</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>587</td>
                          <td>MICRO ALBUMIN</td>
                          <td>Urine-Random/Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>588</td>
                          <td>MLC in -situ (Detection of t(11;14) for Mantle Cell Lymphoma)</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>589</td>
                          <td>MLD- METACHROMATIC LEUKODYSTROPHY (ARYL SULFATASE A)</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>590</td>
                          <td>MLL GENE BREAK REAARANGEMENT</td>
                          <td>Bone Marrow/Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>591</td>
                          <td>MONTOUX TEST (CGHS)</td>
                          <td>Tissue - Blocks</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>592</td>
                          <td>MPN MOLECULAR PANEL REFLEX(JAK2 Exon 14; JAK2 Exon 12 Mutations; MPL Mutations; CALR Mutations)</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>593</td>
                          <td>MPN Molecular Panel( JAK2 Exon 14; JAK2 Exon 12 Mutations; MPL Mutations; CALR Mutations;BCR/ABL Qualitative)(ONCQUEST LAB)(SMO10219)</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>594</td>
                          <td>MPN/MPD Molecular Panel (Reflex)</td>
                          <td>Whole Blood EDTA/Bone Marrow</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>595</td>
                          <td>MRSA SCREENING TEST</td>
                          <td>BODY FLUID/swab</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>596</td>
                          <td>MS   MS   (45 Disorders)</td>
                          <td>Dry Blood Spot</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>597</td>
                          <td>MSUD</td>
                          <td>New Born Card</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>598</td>
                          <td>MTHFR- Mutation Detection </td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>599</td>
                          <td>MUCICARMINE STAIN FOR HISTOPATH </td>
                          <td>Tissue - Blocks/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>600</td>
                          <td>MUMPS IgG ABS - BLOOD</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>601</td>
                          <td>MUMPS IgM ABS - BLOOD</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>602</td>
                          <td>MUSK ANTIBODY (Muscle specific receptor tyrosine kinase antibody)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>603</td>
                          <td>MYCOTECT   ( TB PCR )</td>
                          <td>Tissue - Blocks/Blood/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>604</td>
                          <td>MYELOPEROXIDASE </td>
                          <td>Tissue - Blocks/Blood/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>605</td>
                          <td>MYLINE BASIC PROTEIN (MBP), CSF</td>
                          <td>CSF-Ventricular/CSF-Spinal</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>606</td>
                          <td>Metanephrine 24 hours Urine SRL</td>
                          <td>Urine - 24 Hours</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>607</td>
                          <td>Minimul residual Disease (MRD)</td>
                          <td>Bone Marrow</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>608</td>
                          <td>Multiple Myeloma panel by fish (SRL)</td>
                          <td>Bone Marrow</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>609</td>
                          <td>Multiple Sclerosis  profile (Albumin –CSF &amp; Serum, IgG-CSF &amp; Serum, Oligoclonal band , CSF Index)</td>
                          <td>Blood.</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>610</td>
                          <td>Mycoplasma Pneumonia IgG Antibodies</td>
                          <td>Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>611</td>
                          <td>Mycoplasma Pneumonia IgM Antibodies</td>
                          <td>Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>612</td>
                          <td>Myositis Panel (myositis specific Antibodies)</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>613</td>
                          <td>NEUROTRANSMITTER PANEL(NEOPTERIN AND BIOPTERIN)</td>
                          <td>CSF</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>614</td>
                          <td>NGAL</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>615</td>
                          <td>NICKEL</td>
                          <td>Blood/Urine/Urine - 24 Hours</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>616</td>
                          <td>NMDA RECEPTOR ANTIBODIES</td>
                          <td>Blood &amp; CSF</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>617</td>
                          <td>NOR-ADRENALINE(NOR-epinephrine)</td>
                          <td>Blood/Urine - 24 Hours</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>618</td>
                          <td>NT-proBNP ( BETA- TYPE NATRIURETIC PEPTIDE)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>619</td>
                          <td>Nor Metanephrine Free Plasma</td>
                          <td>Plasma/Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>620</td>
                          <td>Nor-Metanephrine (24 hrs urine)</td>
                          <td>Urine - 24 Hours</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>621</td>
                          <td>OLIGOCLONAL BAND</td>
                          <td>CSF-Spinal/CSF-Ventricular</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>622</td>
                          <td>ORGANIC ACID SCREEN ,URINE</td>
                          <td>Urine/Dry Blood Spot</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>623</td>
                          <td>OSMOLALITY (BLOOD)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>624</td>
                          <td>OSMOTIC FRAGILITY</td>
                          <td>Whole Blood Heparin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>625</td>
                          <td>OSTEIOCALCIN</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>626</td>
                          <td>OXALATE</td>
                          <td>Blood/Urine - 24 Hours</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>627</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>628</td>
                          <td>PANCREATIC ELASTASE TEST</td>
                          <td>Stool</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>629</td>
                          <td>PARANEOPLASTIC DISORDER PROFILE ( HUABS, YOABS, RIABS, PNMA2 ABS AMPHIPHYSIN ABS)</td>
                          <td>Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>630</td>
                          <td>PARIETAL CELL ANTIBODY</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>631</td>
                          <td>PARVOVIROUS IGM</td>
                          <td>Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>632</td>
                          <td>PAS Stain</td>
                          <td>Urine</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>633</td>
                          <td>PDGFRB/ETV6 RT PCR</td>
                          <td>Whole Blood EDTA</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>634</td>
                          <td>PG BLOOD GLUCOSE  (POST GLUCOSE)</td>
                          <td>Fluoride-Plasma</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>635</td>
                          <td>PHENOBARBITONE (GARDINAL)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>636</td>
                          <td>PHENYTOIN ( EPTOIN)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>637</td>
                          <td>PHOSPHORUS (SERUM)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>638</td>
                          <td>PIVKA TOTAL(DCP-DCARBOXY PROTHROMBIN PIVKA-II/AFP/LFT)</td>
                          <td>Blood - Serum</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>639</td>
                          <td>PLATELET COUNT</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>640</td>
                          <td>PML RARA t(15:17) RTPCR (QUALITATIVE)</td>
                          <td>Blood/Bone Marrow</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>641</td>
                          <td>PNEUMOCYSTIS CARINII</td>
                          <td>Broncheoalveolar Lavage/BODY FLUID/Tissue/CSF/SMALL BIOPSY/Sputum/ET Secretions</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>642</td>
                          <td>PNH (CD 55 &amp; CD 59)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>643</td>
                          <td>PNH FLAIR BY FLOWCYTOMETRY</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>644</td>
                          <td>POC FISH REFLEX TO POC KAROTYPING</td>
                          <td>Tissue</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>645</td>
                          <td>PORPHYRINS SPECIATION,24HRS URINE</td>
                          <td>Urine - 24 Hours</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>646</td>
                          <td>POTASSIUM</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>647</td>
                          <td>PP BLOOD GLUCOSE  (POST PRANDIAL)</td>
                          <td>Fluoride-Plasma</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>648</td>
                          <td>PP URINE GLUCOSE</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>649</td>
                          <td>PREGNANCY TEST</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>650</td>
                          <td>PROCALCITONIN QUANTITATIVE</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>651</td>
                          <td>PROGESTERONE</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>652</td>
                          <td>PROLACTIN</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>653</td>
                          <td>PROTEIN C ACTIVITY</td>
                          <td>Whole Blood Citrate</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>654</td>
                          <td>PROTEIN ELECTROPHORESIS</td>
                          <td>Urine - 24 Hours/CSF-Spinal/CSF-Ventricular/Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>655</td>
                          <td>PROTEIN S ACTIVITY</td>
                          <td>Blood - Citrated</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>656</td>
                          <td>PROTHROMBIN GENE MUTATION (FACTOR II -PROTHROMBIN MUTATION)</td>
                          <td>Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>657</td>
                          <td>PRUSSIAN BLUE ( PB) STAINING</td>
                          <td>Tissue - Blocks/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>658</td>
                          <td>PSA (TOTAL PROSTATE SPECIFIC ANTIGEN) SERUM</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>659</td>
                          <td>PTH-PARA THYROID HORMONE ( INTACT MOLECULE)</td>
                          <td>EDTA-Plasma</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>660</td>
                          <td>Parasitic Index</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>661</td>
                          <td>Penta Marker</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>662</td>
                          <td>Peripheral Blood Smear for MPO Staining</td>
                          <td>Blood</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>663</td>
                          <td>Pompes disease ( Alpha 1,4 Glucosidase enzyme )</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>664</td>
                          <td>Primary Immunodeficiency screening Panel (Onquest Lab)</td>
                          <td>Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>665</td>
                          <td>Pyruvate Lactate Ratio</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>666</td>
                          <td>QFPCR (T13,18,21,X,Y)</td>
                          <td>Tissue</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>667</td>
                          <td>QFPCR with Karyotyping</td>
                          <td>EDTA AND AMNIOTIC FLUID</td>
                          <td>21</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>668</td>
                          <td>QUADRUPLE  MARKER TEST</td>
                          <td>Blood - Serum</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>669</td>
                          <td>RA-RHEUMATOID FACTOR</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>670</td>
                          <td>RANDOM BLOOD GLUCOSE</td>
                          <td>Fluoride-Plasma</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>671</td>
                          <td>RANDOM URINE GLUCOSE</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>672</td>
                          <td>RBC Folate</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>673</td>
                          <td>RBC count</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>674</td>
                          <td>RENIN ACTIVITY</td>
                          <td>Whole Blood EDTA</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>675</td>
                          <td>RETICULIN STAIN ( FOR HISTO) </td>
                          <td>Tissue in 10 % Formalin/Tissue - Blocks</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>676</td>
                          <td>RETICULOCYTE COUNT</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>677</td>
                          <td>RHEUMATOID FACTOR ANTIBODIES BY NEPHELOMETRY</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>678</td>
                          <td>RHODAMINE STAIN ( FOR HISTO)</td>
                          <td>Tissue - Blocks/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>679</td>
                          <td>RO ANTIBOPDY SSA ( SOLUBLE SUBSTANCE A )</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>680</td>
                          <td>RUBELLA  IGM ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>681</td>
                          <td>S.BIOTINIDASE (QUANTITATIVE)</td>
                          <td>Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>682</td>
                          <td>SALICYLATE</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>683</td>
                          <td>SARS CoV-2 RNA Qualitative</td>
                          <td>Nasopharyngeal swab/Throat Swab</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>684</td>
                          <td>SCA PANEL (SCA TYPE - 1,12,2,3,6</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>685</td>
                          <td>SCC-SQUAMOUS CELL CARCINOMA ANTIGEN</td>
                          <td>Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>686</td>
                          <td>SCRUB TYPHUS IGM ANTIBODY</td>
                          <td>Blood.</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>687</td>
                          <td>SECOND OPINION SLIDES / BLOCKS FOR HISTO</td>
                          <td>Histopath - Slides/Tissue - Blocks</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>688</td>
                          <td>SELENIUM</td>
                          <td>Urine/Urine - 24 Hours/Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>689</td>
                          <td>SEROTONIN</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>690</td>
                          <td>SERUM PROTEIN (TOTAL)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>691</td>
                          <td>SHBG-SEX HARMONE BINDING GLOBULIN</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>692</td>
                          <td>SICKLING TEST </td>
                          <td>Whole Blood EDTA</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>693</td>
                          <td>SINGLE ANTIGEN BEAD CLASS II (DR DQ&amp;DP loci)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>694</td>
                          <td>SKIN-BIOPSY</td>
                          <td>Tissue in 10 % Formalin/Tissue - Blocks</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>695</td>
                          <td>SLIT SKIN SMEAR FOR LEPRA BACILLI </td>
                          <td>Skin Scrapings</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>696</td>
                          <td>SODIUM</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>697</td>
                          <td>SOMATOMEDIN C (IGF-1)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>698</td>
                          <td>SPECIAL STAIN- PAS</td>
                          <td>FNAC -Material</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>699</td>
                          <td>SPECIAL STAIN-AMYLOID</td>
                          <td>FNAC -Material</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>700</td>
                          <td>SPECIAL STAIN-TRICHROME</td>
                          <td>FNAC -Material</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>701</td>
                          <td>SPECIFIC GRAVITY, URINE</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>702</td>
                          <td>SPERM DNA FRAGMENTATION</td>
                          <td>Semen</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>703</td>
                          <td>SSA-LA(Soluble Substance A) Abs</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>704</td>
                          <td>SSA-RO ( SOLUBLE SUBSTANCE A ) ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>705</td>
                          <td>ST2 BIOMARKER</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>706</td>
                          <td>STONE ( CALCULUS) ANALYSIS</td>
                          <td>Kidney Stone/Gall Bladder Stone/Biopsy Stone</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>707</td>
                          <td>STOOL FOR HANGING DROP</td>
                          <td>Stool</td>
                          <td>1</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>708</td>
                          <td>STOOL FOR MODIFIED ZN STAIN</td>
                          <td>Stool</td>
                          <td>8</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>709</td>
                          <td>STOOL OCCULT BLOOD</td>
                          <td>Stool</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>710</td>
                          <td>STOOL REDUCING SUBSTANCES</td>
                          <td>Stool</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>711</td>
                          <td>STRIATED MUSCLE ( ASKA-ANTI SKELETAL MUSCLE) ABS</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>712</td>
                          <td>SUCROSE LYSIS TEST</td>
                          <td>Blood</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>713</td>
                          <td>Serum Free Light Chain (free light chain kappa, free light chain lambda, kappa/lambda ratio)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>714</td>
                          <td>Skin Biopsy for Immunofluorescence</td>
                          <td>Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>715</td>
                          <td>Sphingolipidosis ( Gaucher Disease* Niemann Pick Disease)</td>
                          <td>Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>716</td>
                          <td>Spink Mutation</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>717</td>
                          <td>Stool-Rotavirus Antigen detection Test</td>
                          <td>Stool</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>718</td>
                          <td>T- CELL GENE REARRANGEMENT</td>
                          <td>Blood/Histopath - Slides</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>719</td>
                          <td>T3, FREE (FREE TRI-IODOTHYRONINE)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>720</td>
                          <td>T3, TOTAL (TRI-IODOTHYRONINE)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>721</td>
                          <td>T4, FREE ( FREE THYROXINE)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>722</td>
                          <td>T4, TOTAL ( TOTAL THYROXINE)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>723</td>
                          <td>TARCOLIMUS (CGHS)</td>
                          <td>Tissue - Blocks</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>724</td>
                          <td>TAY SACHS DISEASE ( HEXOSAMINIDASE A)</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>725</td>
                          <td>TB MGIT DST PACKAGE FOR ABOVE 13 DRUGS</td>
                          <td>CSF</td>
                          <td>30</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>726</td>
                          <td>TB gamma interferon</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>727</td>
                          <td>TEGRETOL ( CARBAMAZEPINE)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>728</td>
                          <td>TESTOSTERONE</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>729</td>
                          <td>TETANUS - IGG ABS</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>730</td>
                          <td>THEOPHYLLINE</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>731</td>
                          <td>THIN LAYER CHROMATOGRAPHY ¿ ORGANIC ACIDS </td>
                          <td>Urine</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>732</td>
                          <td>THROMBIN  TIME</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>733</td>
                          <td>THROMBOCHECK TOTAL</td>
                          <td>SERUM</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>734</td>
                          <td>THYROGLOBULIN (SERUM)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>735</td>
                          <td>TNF-ALPHA ( TISSUE NECROSIS FACTOR)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>736</td>
                          <td>TNF-BETA ( TISSUE NECROSIS FACTOR)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>737</td>
                          <td>TNF-TISSUE NECROSIS FACTOR R1 RECEPTOR</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>738</td>
                          <td>TOCOPHEROL ( VITAMIN E)</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>739</td>
                          <td>TORCH-5 IGM</td>
                          <td>SERUM</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>740</td>
                          <td>TOXOPLASMA -IGG ( QUANTITATIVE)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>741</td>
                          <td>TOXOPLASMA AVIDITY TEST</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>742</td>
                          <td>TPHA-TREPONEMA PALLIDUM HAEMAGGLUTINATION ASSAY</td>
                          <td>Blood/CSF</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>743</td>
                          <td>TPMT GENOTYPING (SRL)</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>744</td>
                          <td>TRANSFERRIN</td>
                          <td>Blood/CSF</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>745</td>
                          <td>TRANSPLANT PANEL 1(LM+(SV40+C4D immunohistochemistry)</td>
                          <td>Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>746</td>
                          <td>TROPONIN I  (Quantitative)</td>
                          <td>EDTA-Plasma</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>747</td>
                          <td>TROPONIN T hs STAT</td>
                          <td>Heparin-Plasma</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>748</td>
                          <td>TSC 1 &amp; 2 gene Sequencing (Tuberous sclerosis complex)</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>749</td>
                          <td>TSH (Cord Blood)</td>
                          <td>New Born Card/Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>750</td>
                          <td>TSH RECEPTOR ANTIBODIES</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>751</td>
                          <td>TSH ULTRA SENSITIVE( THYROID STIMULATING HORMONE)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>752</td>
                          <td>TSH(THYROID STIMULATING HORMONE)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>753</td>
                          <td>TTF (Thyroid Transcription factor) </td>
                          <td>Biopsy</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>754</td>
                          <td>TZANK SMEAR</td>
                          <td>Smear</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>755</td>
                          <td>Tacrolimus</td>
                          <td>Blood</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>756</td>
                          <td>Thrombocheck DNA (MTHFR/Factor V Mutation Detection / Factor II (prothrombin) Mutation Detection)</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>757</td>
                          <td>Thromboelastogram (Rotem) Profile 1 (Intem, Extem, Fibtem)</td>
                          <td>Blood - Citrated</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>758</td>
                          <td>Thromboelastogram (Rotem) Profile 2 (Heptem)</td>
                          <td>Blood - Citrated</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>759</td>
                          <td>Total Cholesterol/HDL Ratio</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>760</td>
                          <td>Triple Marker Test</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>761</td>
                          <td>Trisomy 21 (FISH)</td>
                          <td>Amnioitic Fluid</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>762</td>
                          <td>Typhoid IgM </td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>763</td>
                          <td>U1-snRNP (68 Kda)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>764</td>
                          <td>UREA NITROGEN (Body Fluid)</td>
                          <td>CAPD FLUID - 0 Hr/CAPD FLUID-2 Hr/CAPD FLUID-4 Hr/CAPD FLUID- 8Hr/CAPD FLUID- 10 Hr/CAPD FLUID-12 Hr/CAPD FLUID 24 hour</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>765</td>
                          <td>URIC ACID (SERUM)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>766</td>
                          <td>URIC ACID (URINE)</td>
                          <td>Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>767</td>
                          <td>URINARY CALCIUM (SPOT)</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>768</td>
                          <td>URINARY CHLORIDE (SPOT URINE)</td>
                          <td>Urine - Random</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>769</td>
                          <td>URINARY CREATININE (SPOT)</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>770</td>
                          <td>URINARY MAGNESIUM</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>771</td>
                          <td>URINARY PHOSPHORUS (SPOT)</td>
                          <td>Urine - Random</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>772</td>
                          <td>URINARY UREA (SPOT)</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>773</td>
                          <td>URINE EOSINOPHILS</td>
                          <td>Urine</td>
                          <td>1</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>774</td>
                          <td>URINE FAT GLOBULES (SUDAN III STAIN)</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>775</td>
                          <td>URINE HAEMOGLOBIN</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>776</td>
                          <td>URINE KETONE</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>777</td>
                          <td>URINE PROTEIN (QUALITATIVE)</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>778</td>
                          <td>UTERUS-UTERUS WITH FIBROID</td>
                          <td>Tissue - Blocks/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>779</td>
                          <td>Urea</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>780</td>
                          <td>Uric acid 24 Hrs</td>
                          <td>Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>781</td>
                          <td>Urinary Copper(24 hrs)</td>
                          <td>Urine - 24 Hours</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>782</td>
                          <td>Urinary Homocysteine Test </td>
                          <td>Urine</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>783</td>
                          <td>Urinary Oxlate</td>
                          <td>Urine - Random</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>784</td>
                          <td>Urinary Potassium</td>
                          <td>Urine-Random</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>785</td>
                          <td>Urinary Sodium</td>
                          <td>Urine - Random</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>786</td>
                          <td>Urinary organic acid ( specially for lactic acid and oxalic acid ) quantative</td>
                          <td>Urine</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>787</td>
                          <td>Urine 24 Hrs Immuno Fixation Electrophroresis-Urine</td>
                          <td>Urine - 24 Hours</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>788</td>
                          <td>Urine Osmolality</td>
                          <td>Urine</td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>789</td>
                          <td>VALPORIC ACID(VALPORIN)</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>790</td>
                          <td>VARICELLA (HERPES)ZOSTER-IgG ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>791</td>
                          <td>VARICELLA (HERPES)ZOSTER-IgM, ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>792</td>
                          <td>VASSOSPRESSIN (ADH- ANTI DIURETIC HARMONE)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>793</td>
                          <td>VDRL(RPR)</td>
                          <td>CSF/Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>794</td>
                          <td>VGKC receptor antibody</td>
                          <td>CSF/Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>795</td>
                          <td>VITAMIN B 6 ( PYRIDOXINE)</td>
                          <td>Blood</td>
                          <td>10</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>796</td>
                          <td>VITAMIN B12 (CYANOCOBALAMIN)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>797</td>
                          <td>VITAMIN D (25 HYDROXY), TOTAL</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>798</td>
                          <td>VITAMIN D 3  (1.25 Dihydroxy)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>799</td>
                          <td>VLDL (Very Low Density Lipoprotein Cholesterol)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>800</td>
                          <td>VON GIESSON STAIN(FOR HISTO)</td>
                          <td>Tissue - Blocks/Tissue in 10 % Formalin</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>801</td>
                          <td>VON WILLEBRAND FACTOR</td>
                          <td>Whole Blood Citrate</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>802</td>
                          <td>Vancomycin</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>803</td>
                          <td>Voriconazole</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>804</td>
                          <td>Water Endotoxin Level</td>
                          <td>Water</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>805</td>
                          <td>Wet Mount</td>
                          <td>Liver Abcess</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>806</td>
                          <td>XRAGILE – X PCR BY AMPLIDIX</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>807</td>
                          <td>YERSINIA ENTEROCOLITICA IGM</td>
                          <td>Blood</td>
                          <td>15</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>808</td>
                          <td>ZINC</td>
                          <td>Urine/Urine - 24 Hours/Blood</td>
                          <td>8</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>809</td>
                          <td>ZN (AFB) Stain</td>
                          <td>Suction Tip</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>810</td>
                          <td>h-tTG/DGP</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>811</td>
                          <td>t(11:14) by FISH   </td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>812</td>
                          <td>tTG tissue TRANSGLUTAMINASE ABS IgA</td>
                          <td>Blood</td>
                          <td>7</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>813</td>
                          <td>tTG/DGP (h-tTG/DGP)</td>
                          <td>Blood</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>814</td>
                          <td>24 Hrs URINARY CHLORIDE</td>
                          <td>Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>815</td>
                          <td>24 Hrs URINARY CREATININE</td>
                          <td>Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>816</td>
                          <td>24 Hrs URINARY PHOSPHORUS</td>
                          <td>Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>817</td>
                          <td>24 Hrs URINARY POTASSIUM</td>
                          <td>Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>818</td>
                          <td>24 Hrs URINARY PROTEIN</td>
                          <td>Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>819</td>
                          <td>24 Hrs URINARY UREA</td>
                          <td>Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>820</td>
                          <td>24 Hrs.URINARY SODIUM</td>
                          <td>Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>821</td>
                          <td>24 hrs URINARY CALCIUM</td>
                          <td>Urine - 24 Hours</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>822</td>
                          <td>ABG-BLOOD GAS</td>
                          <td>Whole Blood Heparin</td>
                          <td>1</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>823</td>
                          <td>ADULT ORAL GLUCOSE TOLERANCE TEST</td>
                          <td>Fluoride-Plasma</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>824</td>
                          <td>APTT Mixing Study</td>
                          <td>Plasma-Citrated/Whole Blood Citrate</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>825</td>
                          <td>APTT- ACTIVATED PARTIAL THROMBOPLASTIN</td>
                          <td>Plasma-Citrated/Whole Blood Citrate</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>826</td>
                          <td>ASCITIC FLUID ROUTINE EXAMINATION</td>
                          <td>Ascitic Fluid</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>827</td>
                          <td>BILIRUBIN (TOTAL , DIRECT , INDIRECT)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>828</td>
                          <td>BLEEDING &amp; CLOTTING TIME (BT &amp; CT)</td>
                          <td>Blood</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>829</td>
                          <td>BODY FLUID ROUTINE EXAMINATION</td>
                          <td>BODY FLUID/Bile/Blister Fluid/CAPD Fluid/Drain Fluid/ET Secretions/Prostatic Fluid/Pus/Subcutaneous Fluid/Miscellaneous</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>830</td>
                          <td>C3 &amp; C4 COMPLEMENT</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>831</td>
                          <td>CALCIUM/CREATININE RATIO</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>832</td>
                          <td>CMV -IgG ABS TO CYTOMEGALOVIRUS ELISA</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>833</td>
                          <td>CMV -IgM ABS TO CYTOMEGALOVIRUS ELISA</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>834</td>
                          <td>COAGULATION  PROFILE</td>
                          <td>Whole Blood Citrate/Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>835</td>
                          <td>CREATININE CLEARANCE TEST</td>
                          <td>Blood &amp; Urine - 24 hrs</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>836</td>
                          <td>CSF ROUTINE EXAMINATION</td>
                          <td>CSF-Spinal/CSF-Ventricular</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>837</td>
                          <td>DOUBLE MARKER (TWINS)</td>
                          <td>Blood - Serum</td>
                          <td>5</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>838</td>
                          <td>DRUG OF ABUSE -URINE- QUALITATIVE-SCREENING (10-DRUGS)</td>
                          <td>Urine - Random</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>839</td>
                          <td>Double Marker Test</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>840</td>
                          <td>GLUCOSE TOLERANCE TEST MODIFIED</td>
                          <td>Fluoride-Plasma</td>
                          <td>6</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>841</td>
                          <td>HAEMOGLOBIN ELECTROPHORESIS</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>842</td>
                          <td>HAEMOGRAM</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>843</td>
                          <td>HSV 1 IgG ABS ELISA</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>844</td>
                          <td>HSV 2 IgG ABS ELISA</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>845</td>
                          <td>HSV 2 IgM ABS ELISA</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>846</td>
                          <td>Hb &amp; PCV</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>847</td>
                          <td>IRON &amp; TIBC/ TRANSFERIN SATURATION</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>848</td>
                          <td>MICRO ALBUMIN/CREAT RATIO (QUANTITATIVE)</td>
                          <td>Urine - Random</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>849</td>
                          <td>PERICARDIAL FLUID, ROUTINE EXAMINATION</td>
                          <td>Pericardial Fluid</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>850</td>
                          <td>PERIPHERAL BLOOD SMEAR</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>851</td>
                          <td>PLEURAL FLUID, ROUTINE EXAMINATION</td>
                          <td>Pleural Fluid</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>852</td>
                          <td>PROTEIN / CREATININE RATIO</td>
                          <td>Urine - Random</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>853</td>
                          <td>PROTHROMBIN TIME ( PT)</td>
                          <td>Plasma-Citrated/Whole Blood Citrate</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>854</td>
                          <td>PT Mixing Study</td>
                          <td>Plasma-Citrated/Whole Blood Citrate</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>855</td>
                          <td>RAPID MALARIAL ANTIGEN</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>856</td>
                          <td>RUBELLA  IGG ABS</td>
                          <td>Blood</td>
                          <td>3</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>857</td>
                          <td>SEMEN, ROUTINE EXAMINATION</td>
                          <td>Semen</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>858</td>
                          <td>STOOL ROUTINE EXAMINATION</td>
                          <td>Stool</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>859</td>
                          <td>STOOL ROUTINE WITH SUDAN III STAIN</td>
                          <td>Stool</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>860</td>
                          <td>SYNOVIAL FLUID, ROUTINE EXAMINATION</td>
                          <td>Synovial Fluid</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>861</td>
                          <td>Serum Ascites Albumin Gradient (SAAG)</td>
                          <td>Blood/Ascitic fluid</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>862</td>
                          <td>Total Iron Binding Capacity (TIBC) - CGHS</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>863</td>
                          <td>Tuberculin Test</td>
                          <td></td>
                          <td>2</td>
                          <td>DAY</td>
                        </tr>
                        <tr>
                          <td>864</td>
                          <td>URINE HAEMOGLOBIN &amp; MYOGLOBIN</td>
                          <td>Urine</td>
                          <td>1</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>865</td>
                          <td>URINE ROUTINE EXAMINATION</td>
                          <td>Urine</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>866</td>
                          <td>TRANSPLANT PANEL BY MULTIPLEX PCR</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>867</td>
                          <td>SEPSIS PANEL BY MULTIPLEX PCR</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>868</td>
                          <td>TROPICAL FEVER PANEL BY MULTIPLEX PCR</td>
                          <td>Whole Blood EDTA</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>869</td>
                          <td>eGFR (Glomerular Filtration Rate)</td>
                          <td>Blood - Serum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>870</td>
                          <td>MENINGITIS PANEL BY MULTIPLEX PCR</td>
                          <td>CSF</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>
                        <tr>
                          <td>871</td>
                          <td>RESPIRATORY PANEL BY MULTIPLEX PCR</td>
                          <td>Nasopharyngeal swab &amp; Throat swab  in VTM/ BAL/ Sputum</td>
                          <td>4</td>
                          <td>HOURS</td>
                        </tr>



                      </tbody>

                    </table>


                  </div>



                </div>


              </div>

              <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">


                <div className="Radiology-Services-cont">



                  <div className="Radiologytabel">

                    <table className="table table-hover table-bordered">

                      <tbody>


                        <tr>
                          <td>DIGITAL X-RAY</td>
                        </tr>
                        <tr>
                          <td>FLUOROSCOPY</td>
                        </tr>
                        <tr>
                          <td>HYSTEROSALPINGOGRAM (HSG)</td>
                        </tr>
                        <tr>
                          <td>MICTURATING CYSTOURETHROGRAM (MCU)</td>
                        </tr>
                        <tr>
                          <td>RETROGRADE URETHROGRAM (RGU)</td>
                        </tr>
                        <tr>
                          <td>INTRAVENOUS PYELOGRAM (IVP)</td>
                        </tr>
                        <tr>
                          <td>GENITOURINARY (ASCENDING URETHROGRAPHY)</td>
                        </tr>
                        <tr>
                          <td>BARIUM STUDIES</td>
                        </tr>
                        <tr>
                          <td>BMD (BONE MINERAL DENSITY) :
                            <ul>
                              <li>SPINE</li>
                              <li>WRIST</li>
                              <li>HIP</li>
                              <li>WHOLE BODY</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            ULTRASONOGRAPHY :
                            <ul>
                              <li>USG OBSTETRIC</li>
                              <li>USG CHEST</li>
                              <li>USG JOINT</li>
                              <li>USG 2D, 3D & 4D</li>
                              <li>USG THYROID (NECK)</li>
                              <li>USG SMALL PARTS</li>
                              <li>USG</li>
                              <li>USG ABDOMEN & PELVIS</li>
                              <li>ELASTOGRAPHY</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            COLOR DOPPLER STUDY:
                            <ul>
                              <li>VENOUS DOPPLER</li>
                              <li>ARTERIAL DOPPLER</li>
                              <li>PELVIC DOPPLER</li>
                              <li>ABDOMEN DOPPLER</li>
                              <li>CAROTID DOPPLER</li>
                              <li>RENAL DOPPLER</li>
                              <li>LIVER AND RENAL TRANSPLANT DOPPLER</li>
                              <li>OBS DOPPLER</li>
                              <li>AV FISTULA DOPPLER</li>
                              <li>FETAL ECHO</li>
                            </ul>

                          </td>
                        </tr>
                        <tr>
                          <td>
                            MAMMOGRAPHY (TOMOSYNTHESIS)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            COMPUTED TOMOGRAPHY (CT) SCAN:
                            <ul>
                              <li>CT CORONARY ANGIOGRAPHY</li>
                              <li>CT ANGIOGRAPHY</li>
                              <li>CT RENAL ANGIOGRAPHY</li>
                              <li>CT UPPER LIMB ANGIOGRAPHY</li>
                              <li>CT LOWER LIMB ANGIOGRAPHY</li>
                              <li>CT BRAIN</li>
                              <li>CT LIVER PROTOCOL</li>
                              <li>CT ABDOMEN & PELVIS</li>
                              <li>CT AORTOGRAM</li>
                              <li>HRCT</li>
                              <li>CT NECK</li>
                              <li>3D CT</li>
                              <li>CT JOINT</li>
                              <li>CT UROGRAPHY</li>
                              <li>CT LOOPOGRAM</li>
                              <li>CT PNS</li>
                              <li>CT FACE</li>
                              <li>CT VENOGRAM</li>
                            </ul>

                          </td>
                        </tr>
                        <tr>
                          <td>
                            MAGNETIC RESONANCE IMAGING (MRI) SCAN:

                            <ul>
                              <li>MRI - BRAIN</li>
                              <li>MRI - ANGIOGRAPHY</li>
                              <li>MRI - SPECTROSCOPY</li>
                              <li>MRI - BREAST</li>
                              <li>MRI - CARDIAC</li>
                              <li>MRI - LIVER</li>
                              <li>MRI - PERFUSION (BRAIN)</li>
                              <li>MRI - FISTULOGRAM</li>
                              <li>MRCP E‘Amagrnr</li>
                              <li>MRI - JOINTS</li>
                              <li>MRI - SELLA</li>
                              <li>MRI - SPINE, CERVICAL, LUMBAR</li>
                              <li>MRI DEFECOGRAPHY</li>
                            </ul>

                          </td>
                        </tr>

                      </tbody>

                    </table>


                  </div>



                </div>


              </div>

            </div>








          </div>





        </div>
      </div>




      {/* Diagnostic Services pg end*/}
    </>



  );


};



export default Contactus;
