/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/find-a-doctor',
        destination: '/doctors',
        permanent: true,
      },
      {
        source: '/Doctor/dr-aniruddha-tembe',
        destination: '/doctor-profile?doc=dr-anirudha-giridhar-tembe',
        permanent: true,
      }, {
        source: '/out-patient-department',
        destination: '/',
        permanent: true,
      }, {
        source: '/careers-current-opening/',
        destination: '/work-with-us',
        permanent: true,
      }, {
        source: '/aditya-birla-memorial-hospital/',
        destination: '/',
        permanent: true,
      }, {
        source: '/directory-timings',
        destination: '/',
        permanent: true,
      }, {
        source: '/Doctor/dr-ashish-pathak-4',
        destination: '/',
        permanent: true,
      }, {
        source: '/best-cancer-hospital-in-pune',
        destination: '/',
        permanent: true,
      }, {
        source: '/Doctor/dr-vijay-anand',
        destination: '/doctor-profile?doc=dr-anand-vijay',
        permanent: true,
      }, {
        source: '/Doctor/dr-varsha-rangari',
        destination: '/doctor-profile?doc=dr-varsha-narayan-rangari',
        permanent: true,
      }, {
        source: '/orthopedic-hospital-in-pune/joint-care-orthopedics-services',
        destination: '/specialties-sub/orthopaedics',
        permanent: true,
      }, {
        source: '/Doctor/dr-manisha-gotarkar-2',
        destination: '/',
        permanent: true,
      }, {
        source: '/specialities-mother-child-pediatric-gynecology',
        destination: '/specialties/pediatrics',
        permanent: true,
      }, {
        source: '/Doctor/dr-manisha-gotarkar-2',
        destination: '/',
        permanent: true,
      }, {
        source: '/laboratory-services-in-pune',
        destination: '/',
        permanent: true,
      }, {
        source: '/specialities-urology',
        destination: '/specialties/urology',
        permanent: true,
      }, {
        source: '/eye-hospital-in-pune/ophthalmology',
        destination: '/specialties/Ophthalmology',
        permanent: true,
      }, {
        source: '/Doctor/dr-paresh-babel',
        destination: '/doctor-profile?doc=dr-paresh-pravin-babel',
        permanent: true,
      }, {
        source: '/ent-hospital-in-pune',
        destination: '/',
        permanent: true,
      }, {
        source: '/Doctor/dr-charushila-dhole/',
        destination: '/',
        permanent: true,
      }, {
        source: '/Doctor/dr-samith-chouta/',
        destination: '/',
        permanent: true,
      }, {
        source: '/ent-hospital-in-pune',
        destination: '/doctor-profile?doc=dr-samith-srinivas-chouta',
        permanent: true,
      }, {
        source: '/skin-care-hospital-in-pune/',
        destination: '/',
        permanent: true,
      }, {
        source: '/Doctor/dr-nilesh-nadkarni/',
        destination: '/doctor-profile?doc=dr-nilesh-anil-nadkarni',
        permanent: true,
      }, {
        source: '/Doctor/dr-rakesh-ranjan/',
        destination: '/doctor-profile?doc=dr-rakesh-ranjan',
        permanent: true,
      }, {
        source: '/Doctor/dr-vaishali-bafna/',
        destination: '/doctor-profile?doc=dr-vaishali-mahendra-bafna',
        permanent: true,
      }, {
        source: '/internship-observer-ship-2',
        destination: '/internship-observer-ship',
        permanent: true,
      }, {
        source: '/best-neurology-hospital-in-pune',
        destination: '/',
        permanent: true,
      }, {
        source: '/emergency-medical-services-in-pune',
        destination: '/specialties/accident-and-emergency',
        permanent: true,
      }, {
        source: '/Doctor/dr-ritesh-kakrania',
        destination: '/doctor-profile?doc=dr-ritesh-kakrania',
        permanent: true,
      }, {
        source: '/third-party-administrator-tpa/',
        destination: '/',
        permanent: true,
      }, {
        source: '/specialities-neurology',
        destination: '/',
        permanent: true,
      }, {
        source: '/dental-clinic-in-chinchwad/',
        destination: '/',
        permanent: true,
      }, {
        source: '/patient-visitors-laboratory-services',
        destination: '/',
        permanent: true,
      }, {
        source: '/careers-observerships',
        destination: '/internship-observer-ship',
        permanent: true,
      }, {
        source: '/patient-services',
        destination: '/',
        permanent: true,
      }, {
        source: '/Doctor/dr-prashant-gaikwad',
        destination: '/doctor-profile?doc=dr-prashant-prabhakar-gaikwad',
        permanent: true,
      }, {
        source: '/Doctor/dr-rajiv-sethi',
        destination: '/doctor-profile?doc=dr-rajiv-bundashah-sethi',
        permanent: true,
      }, {
        source: '/Doctor/dr-wategaonkar-ravikumar-narayan',
        destination: '/doctor-profile?doc=dr-ravi-narayan-wategaonkar',
        permanent: true,
      }, {
        source: '/Doctor/dr-tushar-warke',
        destination: '/doctor-profile?doc=dr-tushar-anil-warke',
        permanent: true,
      }, {
        source: '/Doctor/dr-prasad-ashok-bhate',
        destination: '/doctor-profile?doc=dr-prasad-ashok-bhate',
        permanent: true,
      }, {
        source: '/rooms',
        destination: '/',
        permanent: true,
      }, {
        source: '/physiotherapy-centre-in-pune/physiotherapy-rehabilitation-services/',
        destination: '/',
        permanent: true,
      }, {
        source: '/Doctor/dr-manish-srivastava/',
        destination: '/doctor-profile?doc=dr-manish-srivastava',
        permanent: true,
      }, {
        source: '/Doctor/dr-rajesh-badani/',
        destination: '/doctor-profile?doc=dr-rajesh-surendra-badani',
        permanent: true,
      }, {
        source: '/best-heart-hospital-in-pune',
        destination: '/',
        permanent: true,
      }, {
        source: '/Doctor/dr-savali-sultane',
        destination: '/doctor-profile?doc=dr-savali-kiran-sultane',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
