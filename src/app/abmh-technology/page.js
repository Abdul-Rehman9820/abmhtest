

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './abmh-technology.css'


const Technology = () => {

  useEffect(() => {


    // window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);


  return (


    <>
      <title>Technology</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  About Us / <span className="breadcrumbsactive">Our Technology</span>
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
          <Image width={2000} height={400} src="/commonimages/commdummybanner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}

      {/* Teach start*/}




      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="Teachpolmain2 mt-4">
            <div className="Teachpolyhead">
              <div className="Teachpolyheadbof">
                <h2 className="Teachpolyheadbalc">Our Technology</h2>
                <span className="Teachpolyheadborder" />
              </div>
            </div>



            <div className="Teachbloglayot">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/Hybird-cath-lab.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">Hybrid Cath Lab</div>
                <div className="Teachbloglayotpara">
                  Our Hybrid Cathlab stands at the forefront of medical innovation, integrating a cutting-edge CT scanner to revolutionize cardiovascular care. This advanced facility enables seamless transitions between diagnostic imaging and catheterization procedures, offering a comprehensive approach to patient assessments. At the heart of our capabilities lies the expertise to perform intricate Open Heart Structural Surgery with unparalleled precision, pushing the boundaries of cardiac interventions.
                </div>
                <div className="collapse" id="HybridCathLab">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      Specializing in Neuro Interventional Radiology Procedures, our facility addresses complex neurological conditions through a multidisciplinary lens. Additionally, our focus on Endovascular Procedures allows us to deliver innovative solutions for vascular disorders, ensuring optimal outcomes for our patients. With a commitment to excellence, our Hybrid Cathlab represents a convergence of medical expertise and technological advancement, setting new standards in procedural efficiency and patient care.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#HybridCathLab" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot Teachrevercelayout">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/Flat-Panel-Cath Lab.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">Flat Panel Cath Lab</div>
                <div className="Teachbloglayotpara">
                  Experience the future of interventional medicine in our Flat Panel Cath Lab, equipped with a cutting-edge 55-inch flat panel display for unparalleled visualization. Our commitment to superior imaging is evident with Stent Boost Technology, enhancing precision in stent placement and providing clinicians with enhanced clarity during procedures.
                </div>
                <div className="collapse" id="FlatPanelCathLab">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      Embracing innovation, our Flat Panel Cath Lab is designed with Fluro Save capabilities, optimizing radiation dosage for both patients and medical staff without compromising image quality. This state-of-the-art facility not only redefines the standards of visual clarity but also prioritizes safety through advanced technologies, ensuring a seamless and secure environment for intricate interventional procedures.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#FlatPanelCathLab" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/ElektaVersaHDLinearAccelerator.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">Elekta Versa HD  Linear Accelerator</div>
                <div className="Teachbloglayotpara">
                  The Elekta Versa HD Linear Accelerator represents a pinnacle in advanced radiation therapy technology, designed to provide exceptional precision and versatility in cancer treatment. Featuring state-of-the-art capabilities, the Versa HD is equipped with High-Definition Dynamic Radiosurgery (HDRS), offering a specialized solution for brain metastases. This innovation enables high-definition delivery tailored for small targets, ensuring unparalleled accuracy.
                </div>
                <div className="collapse" id="HybridCathLab">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      The system facilitates faster treatments with fewer and shorter arcs, optimizing efficiency without compromising on patient care. Versa HD incorporates robust template-based plan optimization, streamlining the planning process for clinicians. Notably, it supports frameless Stereotactic Radiosurgery (SRS) and Stereotactic Radiotherapy (SRT) with continuous Stereotactic Image-Guided Radiation Therapy (SIGRT) monitoring, ensuring real-time precision during treatments. Elekta Versa HD Linear Accelerator stands as a testament to cutting-edge technology, providing clinicians with a comprehensive and advanced platform for delivering effective and precise radiation therapy.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#HybridCathLab" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot Teachrevercelayout">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/RobotdaVinciXi.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">Robot da Vinci Xi</div>
                <div className="Teachbloglayotpara">
                  The da Vinci Xi Surgical System is a groundbreaking robotic surgical platform designed and manufactured by Intuitive Surgical. The da Vinci Xi represents the latest advancement in robotic-assisted surgery, providing enhanced capabilities and versatility for minimally invasive procedures. With its sophisticated robotic arms and a 3D high-definition vision system, the da Vinci Xi allows surgeons to perform complex surgeries with precision and control through small incisions.
                </div>
                <div className="collapse" id="RobotdaVinciXi">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      The system&apos;s advanced features include wristed instruments that mimic the natural movements of a surgeon&apos;s hand, enabling a wide range of motion and improved dexterity. The da Vinci Xi is particularly renowned for its application in various surgical specialties, such as urology, gynecology, Oncology, GI surgery, General Surgery, and more. This robotic surgical system has transformed the landscape of surgery, offering patients the benefits of reduced pain, quicker recovery times, and minimal scarring.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#RobotdaVinciXi" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/CTScan.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">CT Scan</div>
                <div className="Teachbloglayotpara">
                  A CT Scan 128 Slice Dual Source system is a sophisticated medical imaging technology that combines speed and high-resolution capabilities for detailed and comprehensive diagnostic imaging. The &quot;128 Slice&quot; refers to the number of simultaneous slices or images the CT scanner can acquire in a single rotation, providing a more detailed and faster imaging process compared to lower-slice systems.
                </div>
                <div className="collapse" id="CTScan">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      The &quot;Dual Source&quot; aspect means that the CT scanner is equipped with two X-ray sources and detector arrays, operating simultaneously at different energy levels. This dual-source technology enhances image quality, reduces motion artifacts, and allows for advanced applications such as cardiac imaging with high temporal resolution. The combination of 128 slices and dual-source technology results in improved diagnostic accuracy, faster scanning times, and enhanced imaging capabilities, making it a valuable tool in various medical fields, including cardiology, oncology, and neurology.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#CTScan" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot Teachrevercelayout">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/MRIScan.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">MRI Scan</div>
                <div className="Teachbloglayotpara">
                  An MRI (Magnetic Resonance Imaging) system operating at 1.5 Tesla refers to the strength of the magnetic field used in the imaging process. The Tesla (T) is the unit of measurement for magnetic field strength in an MRI machine. A 1.5 Tesla MRI is a standard and widely used configuration in medical imaging.
                </div>
                <div className="collapse" id="MRIScan">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      The strength of the magnetic field influences the quality and clarity of the images produced. In a 1.5 Tesla MRI, the magnetic field is strong enough to generate high-quality images for a broad range of diagnostic applications, including imaging of the brain, spine, joints, and soft tissues throughout the body. This level of magnetic field strength provides a good balance between image resolution and scan time, making it suitable for routine clinical use.
                    </div>
                    <div className="Teachbloglayotpara">
                      MRI at 1.5 Tesla is commonly used in various medical specialties, offering detailed anatomical information without exposing patients to ionizing radiation. It is a versatile imaging tool that aids in the diagnosis and monitoring of a wide array of medical conditions.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#MRIScan" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/Mammography.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">Mammography</div>
                <div className="Teachbloglayotpara">
                  Our cutting-edge MAMMOMAT Inspiration mammography system, a pioneering technology at the forefront of breast health diagnostics. Focused on enhancing patient experience and diagnostic precision, this system boasts an impressive up to 30% reduction in dose without compromising image quality, setting the benchmark for low-dose mammography.
                </div>
                <div className="collapse" id="Mammography">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      We prioritize patient well-being by cultivating a calming atmosphere during examinations, recognizing the importance of relaxation for a smoother experience. With advanced features like 0° and 50° Wide-Angle Tomosynthesis, our system empowers breast care professionals and radiologists with highly accurate tools for cancer detection and diagnosis. Supported by PRIME Technology, our mammography suite offers an easy-to-use and efficient workflow, unlocking the full potential of our X-ray department. Elevate your institution&apos;s standards by providing a superior mammography experience, where greater comfort and unparalleled image quality converge, positively impacting the lives of women and their families.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#Mammography" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot Teachrevercelayout">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/BMDMachine.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">BMD Machine</div>
                <div className="Teachbloglayotpara">
                  A Bone Mineral Density (BMD) machine, also known as a dual-energy X-ray absorptiometry (DXA or DEXA) scanner, is a specialized medical device used for assessing bone health and density. This non-invasive diagnostic tool plays a crucial role in identifying conditions such as osteoporosis and assessing the risk of fractures. By utilizing low-dose X-rays to measure bone density, the BMD machine provides precise and accurate information about the mineral content in various regions of the skeleton, typically the spine and hip.
                </div>
                <div className="collapse" id="BMDMachine">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      The BMD machine&apos;s results are presented in the form of a T-score, comparing an individual&apos;s bone density to that of a healthy young adult. Negative T-scores indicate lower bone density, signifying an increased risk of fractures.
                    </div>
                    <div className="Teachbloglayotpara">
                      In clinical settings, BMD machines are essential for early detection of bone density loss and monitoring the effectiveness of treatment strategies. The information provided by these machines aids healthcare professionals in developing personalized care plans to mitigate the risk of fractures and improve overall bone health. Regular BMD screenings are especially important for individuals at higher risk of osteoporosis, such as postmenopausal women and older adults.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#BMDMachine" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/DigitalX.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">Digital X</div>
                <div className="Teachbloglayotpara">
                  Discover a new era in diagnostic imaging with the CARESTREAM DRX-Ascend Digital X-ray System. Renowned for its high performance, unmatched quality, and exceptional value, this state-of-the-art system empowers healthcare professionals with swift and precise diagnoses through immediate access to superior-quality images.
                </div>
                <div className="collapse" id="DigitalX">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      Its remarkable versatility seamlessly adapts to diverse imaging requirements, offering a comprehensive solution for medical practitioners. Powered by advanced digital technology, the DRX-Ascend ensures streamlined workflows, reducing patient wait times and fostering efficient collaboration with electronic image storage and retrieval capabilities. A strategic and sound investment, the DRX-Ascend System sets unprecedented standards in diagnostic imaging, harmonizing excellence in performance, quality, and value to elevate the healthcare experience.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#DigitalX" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot Teachrevercelayout">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/BrachytherapyMachine.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">Brachytherapy Machine</div>
                <div className="Teachbloglayotpara">
                  Brachytherapy, an advanced form of cancer treatment, is enhanced with our cutting-edge 36 Channel Brachytherapy machine. This state-of-the-art system exemplifies precision and sophistication in delivering targeted radiation therapy. With 36 channels, it offers unparalleled control and customization, allowing for highly specific and effective treatment of tumors.
                </div>
                <div className="collapse" id="BrachytherapyMachine">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      Brachytherapy involves the placement of radioactive sources directly into or near the tumor site, and our machine&apos;s 36 channels enable intricate and tailored radiation delivery for optimal therapeutic outcomes. This technology represents a significant advancement in cancer care, providing oncologists with a powerful tool to precisely target and treat malignancies while minimizing the impact on surrounding healthy tissues. The 36 Channel Brachytherapy machine stands as a beacon of innovation, exemplifying our commitment to advancing cancer treatment and improving patient outcomes.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#BrachytherapyMachine" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/BodyboxDiffuser.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">Bodybox Diffuser</div>
                <div className="Teachbloglayotpara">
                  A Body Box Diffuser in pulmonology is a specialized device used in pulmonary function testing (PFT) to measure lung volumes and capacities. This apparatus is an integral component of body plethysmography, a diagnostic technique that assesses lung function by analyzing changes in pressure and volume within an enclosed space, typically a body box.
                </div>
                <div className="collapse" id="BodyboxDiffuser">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      The diffuser in the Body Box facilitates the accurate measurement of lung volumes by allowing patients to breathe against a controlled resistance, enabling precise calculations of functional residual capacity (FRC), total lung capacity (TLC), and other crucial pulmonary parameters. This advanced technology in pulmonology plays a crucial role in diagnosing and monitoring respiratory conditions such as chronic obstructive pulmonary disease (COPD) and restrictive lung diseases, providing valuable insights into lung function for comprehensive patient care.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#BodyboxDiffuser" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot Teachrevercelayout">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/HolmiumLaser.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">Holmium Laser</div>
                <div className="Teachbloglayotpara">
                  The Holmium Laser with a power output of 120 watts is a high-performance medical laser system widely used in various surgical procedures. This laser technology harnesses the unique properties of holmium ions to emit laser energy in the infrared spectrum. The 120-watt power capacity signifies a robust energy output, making it particularly suitable for urological applications such as lithotripsy for kidney stones, benign prostatic hyperplasia (BPH) treatments, and other minimally invasive surgical interventions.
                </div>
                <div className="collapse" id="HolmiumLaser">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      The Holmium Laser&apos;s precision and versatility make it a preferred choice for urologists and other surgeons performing procedures that require precise tissue ablation or fragmentation. The 120-watt capacity ensures efficient and effective energy delivery, allowing for faster procedures and improved patient outcomes. As a cutting-edge tool in modern medicine, the Holmium Laser with a 120-watt power rating exemplifies the commitment to advanced surgical techniques and patient care in various medical disciplines.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#HolmiumLaser" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


            <div className="Teachbloglayot">
              <div className="Teachbloglayot1">
                <Image width={400} height={400} src="/technologypageimg/Endoscopy.jpg" alt="img" />
              </div>
              <div className="Teachbloglayot2">
                <div className="Teachbloglayothead">Endoscopy</div>
                <div className="Teachbloglayotpara">
                  Endoscopy is a medical procedure that involves the use of an endoscope—a flexible, lighted tube with a camera at the end—to visually examine and diagnose conditions within the body. This minimally invasive technique allows physicians to access and visualize internal organs and structures without the need for major surgery. Endoscopy is commonly utilized across various medical specialties, including ENT, gastroenterology, pulmonology, and urology.
                </div>
                <div className="collapse" id="Endoscopy">
                  <div className="">
                    <div className="Teachbloglayotpara">
                      In gastroenterology, for instance, a gastroscopy involves examining the esophagus, stomach, and the beginning of the small intestine, while a colonoscopy visualizes the colon and rectum. In pulmonology, bronchoscopy examines the airways and lungs. Urologists use cystoscopy to inspect the bladder, and gynecologists may perform hysteroscopy to examine the uterus.
                    </div>
                    <div className="Teachbloglayotpara">
                      Endoscopic procedures offer several advantages, including quicker recovery times, reduced risk of complications, and the ability to obtain diagnostic samples or perform therapeutic interventions during the examination. The continuous advancements in endoscopic technology have led to improved imaging capabilities, making it an invaluable tool for both diagnosis and treatment in modern medicine.
                    </div>
                  </div>
                </div>
                <button className="Teachreadmorbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#Endoscopy" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* Teach end*/}
    </>





  );


};



export default Technology;
