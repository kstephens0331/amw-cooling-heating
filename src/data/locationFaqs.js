// Per-town FAQ content for the location pages. Answers are plain ASCII strings
// so the same text feeds both the on-page accordion and the FAQPage JSON-LD.
// Facts used here are drawn from the rest of the site: hours are 8am to 9pm
// seven days a week, after-hours emergency service runs 5pm to 9pm (additional
// charges may apply), the company is licensed under TACLB133920E, financing is
// offered through Synchrony and FTL Finance, and the Google rating is 5.0 stars.

export const LOCATION_FAQS = {
  'conroe-tx': {
    town: 'Conroe',
    faqs: [
      {
        question: 'What HVAC services does AMW provide in Conroe?',
        answer: 'We provide the full range of residential HVAC work in Conroe: AC repair and installation, heating repair, seasonal maintenance, indoor air quality, smart thermostats, and dryer vent cleaning. Because our shop is based in Conroe, we can handle whatever your system needs, from a same-day repair to a full system replacement, without bringing in a subcontractor.'
      },
      {
        question: 'What parts of Conroe and Montgomery County do you serve?',
        answer: 'We cover the whole city, from Downtown Conroe and the neighborhoods around Lake Conroe to River Plantation, April Sound, and the newer construction around Crighton Ridge, plus the surrounding Montgomery County communities. Wherever you are in the Conroe area, AMW Cooling and Heating is ready to help.'
      },
      {
        question: 'How fast can AMW respond to an HVAC emergency in Conroe?',
        answer: 'Since we are based right here in Conroe, we are usually the closest HVAC company to you, and we can typically reach you the same day for both cooling and heating emergencies. We are open 8am to 9pm seven days a week, with after-hours emergency service from 5pm to 9pm.'
      },
      {
        question: 'Are you licensed and insured to work in Conroe?',
        answer: 'Yes. AMW Cooling and Heating is a veteran-owned company that is fully licensed under TACLB133920E, insured, and bonded. You get honest, upfront pricing before any work starts, backed by a 5.0-star Google rating from your neighbors around Montgomery County.'
      },
      {
        question: 'Do you offer financing on HVAC systems in Conroe?',
        answer: 'A full system replacement is a big expense to absorb in one payment, which is why we set up financing through Synchrony and FTL Finance for Conroe customers. Bring it up when we are on-site for your estimate and we will lay out the plans on the spot, before you decide anything.'
      },
      {
        question: 'Do you offer maintenance plans for Conroe homeowners?',
        answer: 'Yes. Regular maintenance is the best way to avoid a breakdown during a 100-degree Conroe summer, and it keeps manufacturer warranties valid on newer systems. Ask us about a maintenance plan that includes seasonal tune-ups, priority scheduling, and discounts on repairs. Call (936) 331-1339 for current plan details.'
      }
    ]
  },
  'the-woodlands-tx': {
    town: 'The Woodlands',
    faqs: [
      {
        question: 'Do you service HVAC systems throughout The Woodlands villages?',
        answer: 'Yes. We cover all of The Woodlands, from Alden Bridge and Cochran\'s Crossing to Creekside Park, Sterling Ridge, Panther Creek, and Grogan\'s Mill. Our Conroe shop is about 20 minutes north, so The Woodlands is one of our primary service areas and we can usually be there the same day.'
      },
      {
        question: 'Can you service multi-zone and smart HVAC systems common in Woodlands homes?',
        answer: 'Yes. Many Woodlands homes have multi-zone setups, variable-speed equipment, and smart thermostats, and our technicians are trained to diagnose and repair all of it. We work on high-end systems from Trane, Carrier, Lennox, and others without pushing you toward a full replacement when a repair will do.'
      },
      {
        question: 'Do you work on light commercial systems in The Woodlands, or just homes?',
        answer: 'Both. Alongside single-family homes throughout the villages, we service light commercial HVAC for the offices and shops around Town Center and the village centers, from routine repair to full system replacement.'
      },
      {
        question: 'Do you offer emergency AC repair in The Woodlands?',
        answer: 'We do, and because The Woodlands is one of our closest, busiest service areas, a technician is rarely far away when a system quits after hours. Our after-hours window runs 5pm to 9pm on top of the normal 8am to 9pm day, seven days a week. Dial (936) 331-1339 as soon as the AC stops keeping up; after-hours calls carry an additional charge.'
      },
      {
        question: 'Is financing available for a new system in The Woodlands?',
        answer: 'It is, and it matters more here than in a lot of towns, since the multi-zone and variable-speed systems common in Woodlands homes cost more up front than a basic single-stage unit. Synchrony and FTL Finance let you spread that cost into a monthly payment, and your technician can run the numbers next to your free estimate before you decide between a repair and a replacement.'
      }
    ]
  },
  'spring-tx': {
    town: 'Spring',
    faqs: [
      {
        question: 'What HVAC services does AMW provide in Spring?',
        answer: 'We provide the full range of residential HVAC work in Spring: AC repair and installation, heating repair, seasonal maintenance, indoor air quality, smart thermostats, and dryer vent cleaning. Whatever your system needs, from a same-day repair to a full replacement, we handle it directly without bringing in a subcontractor.'
      },
      {
        question: 'What parts of Spring do you serve?',
        answer: 'We serve all of Spring, including Old Town Spring, the Champions and Champions Forest area, Klein, Gleannloch Farms, Spring Stuebner, Cypresswood, and Louetta. Whether your home is a 1970s build in Champions Forest or new construction near the Grand Parkway, we have the experience to keep it comfortable.'
      },
      {
        question: 'Are you licensed and insured to work in Spring?',
        answer: 'Yes. We hold Texas HVAC license TACLB133920E and carry full insurance. As a veteran-owned company, we also stand behind every job with upfront, transparent pricing before any work begins, so there are never surprises on your invoice.'
      },
      {
        question: 'Can you come out the same day for a Spring HVAC emergency?',
        answer: 'In most cases, yes. We are a short drive south of our Conroe shop, so Spring is one of the areas we can typically reach the same day. We are open 8am to 9pm, seven days a week, with after-hours emergency service from 5pm to 9pm. Call (936) 331-1339 and we will get a technician headed your way.'
      },
      {
        question: 'Do you offer financing and maintenance plans in Spring?',
        answer: 'Yes on both. We offer financing through Synchrony and FTL Finance for installs and larger repairs, and we offer maintenance plans with seasonal tune-ups and priority service. Regular maintenance is the cheapest way to avoid a mid-summer breakdown. Call (936) 331-1339 for current plan pricing.'
      }
    ]
  },
  'montgomery-tx': {
    town: 'Montgomery',
    faqs: [
      {
        question: 'Do you service lakefront homes on Lake Conroe in Montgomery?',
        answer: 'Yes. We regularly service homes in Walden on Lake Conroe, Bentwater, April Sound, and along the FM 149 corridor. Lakefront properties deal with extra humidity and moisture that strain AC systems, so we pay close attention to dehumidification, drain lines, and coil condition on homes near the water.'
      },
      {
        question: 'How does Lake Conroe humidity affect my AC and indoor air?',
        answer: 'Being close to the lake means higher moisture in and around your home. That can leave rooms feeling clammy, promote mold growth, and overwork an AC that is not sized or charged correctly. We check refrigerant, airflow, and drainage and can recommend dehumidification or indoor air quality upgrades so your home stays comfortable and healthy.'
      },
      {
        question: 'What brands do you repair in Montgomery?',
        answer: 'We service all major HVAC brands, including Carrier, Trane, Lennox, Goodman, Rheem, and York. From upscale homes in Bentwater to established places near historic downtown Montgomery, our technicians handle both older equipment and newer high-efficiency systems.'
      },
      {
        question: 'Can you get to Montgomery the same day?',
        answer: 'Usually. Montgomery sits just west of our Conroe shop, so most calls, lakefront or downtown, get a technician out the same day. Our hours run 8am to 9pm daily, and if your system quits after that, our after-hours emergency line covers you until 9pm. Reach us at (936) 331-1339.'
      },
      {
        question: 'Do you offer financing on new systems in Montgomery?',
        answer: 'We do, through Synchrony and FTL Finance. A properly sized system for a Lake Conroe humidity load sometimes calls for larger equipment or added dehumidification, so financing helps spread that upfront cost into monthly payments. We will walk through the options during your free estimate, no pressure.'
      }
    ]
  },
  'willis-tx': {
    town: 'Willis',
    faqs: [
      {
        question: 'Do you serve the Lake Conroe communities around Willis?',
        answer: 'Yes. We cover Willis and the surrounding lake communities, including Seven Coves, Point Aquarius, and Panorama Village, along with homes near downtown Willis and along FM 830. From lakefront properties to rural acreage, we handle the full range of HVAC needs in the Willis area.'
      },
      {
        question: 'Why does the humidity near Lake Conroe affect Willis homes so much?',
        answer: 'Homes near Lake Conroe deal with higher humidity than homes further from the water, and that extra moisture puts more strain on both cooling and heating equipment and can encourage mold growth if it is not managed well. We factor that into every visit in the Willis area, whether it is a routine maintenance check, a repair, or a new installation, so your system is sized and set up for the moisture load, not just the temperature.'
      },
      {
        question: 'How quickly can you reach Willis for emergency HVAC service?',
        answer: 'Most Willis calls get a same-day appointment, and often faster, since Conroe is just down I-45. Our regular hours run 8am to 9pm every day, with emergency coverage extending from 5pm to 9pm on top of that. Dial (936) 331-1339 and tell us what is going on.'
      },
      {
        question: 'What HVAC brands do you install and repair in Willis?',
        answer: 'We service and install all major brands, including Carrier, Trane, Lennox, Goodman, Rheem, and York. Whether you need a repair on an older unit or a new high-efficiency system for a lakefront or acreage home, we can help you choose the right equipment.'
      },
      {
        question: 'Do you offer financing for a new AC in Willis?',
        answer: 'Yes, and it is worth asking about before you assume a full replacement is out of reach. Synchrony and FTL Finance both run through us and cover a range of credit situations, and we will lay out real monthly numbers next to the upfront repair-or-replace pricing when we are at your house, no pressure either way.'
      }
    ]
  },
  'magnolia-tx': {
    town: 'Magnolia',
    faqs: [
      {
        question: 'What areas of Magnolia do you serve?',
        answer: 'We cover Magnolia along the FM 1488 and FM 1774 corridors, from master-planned neighborhoods like Woodforest and Mostyn Manor out to the established ranch and acreage properties around Decker Prairie and Dobbin. Give us your street and we can usually tell you on the spot whether it falls inside our regular coverage.'
      },
      {
        question: 'What HVAC services does AMW provide in Magnolia?',
        answer: 'We offer complete HVAC service in Magnolia, including AC repair, AC installation, heating repair, maintenance, indoor air quality, smart thermostats, and dryer vent cleaning. Whatever your home or property needs, our veteran-owned team can handle it.'
      },
      {
        question: 'Do you work on both subdivision homes and acreage properties in Magnolia?',
        answer: 'Yes. Magnolia is a genuine mix of newer subdivision homes and established ranch and acreage properties on larger lots, and we are equally comfortable working in either setting. Whatever type of property you have, you get the same honest assessment and upfront pricing.'
      },
      {
        question: 'Do you offer same-day and emergency service in Magnolia?',
        answer: 'Yes, and it is not limited to daytime hours. Our regular schedule runs 8am to 9pm seven days a week, with dedicated after-hours emergency coverage from 5pm to 9pm for anything that cannot wait until morning. Call (936) 331-1339 and tell us what is going on; additional charges apply outside normal business hours.'
      },
      {
        question: 'Is financing available for HVAC work in Magnolia?',
        answer: 'Yes. Synchrony and FTL Finance both work with us to spread out the cost of a larger repair or a full system replacement. We give you an upfront price first, then walk through the actual payment numbers for your situation during the estimate, not just a list of general options.'
      }
    ]
  },
  'tomball-tx': {
    town: 'Tomball',
    faqs: [
      {
        question: 'Does AMW provide HVAC service in Tomball?',
        answer: 'Yes. We serve Tomball and the surrounding northwest Harris and Montgomery County area for AC repair, AC installation, heating repair, maintenance, and indoor air quality. As a veteran-owned company, we bring the same honest, upfront service to Tomball that we give every community we cover.'
      },
      {
        question: 'What HVAC equipment do you work on in Tomball?',
        answer: 'We work on complete heating and cooling systems, including central air conditioners, heat pumps, gas and electric furnaces, thermostats, and indoor air quality equipment, from every major brand such as Carrier, Trane, Lennox, Goodman, Rheem, York, and American Standard. Whether a Tomball home near the historic downtown runs an older system or a new build off the 249 corridor has the latest high-efficiency equipment, our technicians handle it.'
      },
      {
        question: 'Which parts of the Tomball area do you serve?',
        answer: 'We cover Tomball and the surrounding communities where Harris, Montgomery, and Waller counties meet, from the historic downtown and Tomball Parkway area to newer developments like Rosehill Reserve, Lakewood Grove, and the Hufsmith area. If you are unsure whether your address falls inside our Tomball coverage, call (936) 331-1339 and we can tell you right away.'
      },
      {
        question: 'Do you offer emergency heating and cooling service in Tomball?',
        answer: 'We do, and Tomball\'s spread from downtown to the 249 corridor does not slow us down. Our regular hours run 8am to 9pm every day, and we cover after-hours AC and heating emergencies from 5pm to 9pm as well. Call (936) 331-1339; after-hours calls carry an additional charge, which we will confirm with you before dispatching.'
      },
      {
        question: 'Do you offer financing and maintenance plans in Tomball?',
        answer: 'Ask about our maintenance plans first, since seasonal tune-ups and priority scheduling catch most problems before they turn into a summer breakdown. If a repair or new system is bigger than a maintenance plan can prevent, Synchrony and FTL Finance financing is available to spread out the cost. Call (936) 331-1339 and we will walk you through both.'
      }
    ]
  },
  'new-caney-tx': {
    town: 'New Caney',
    faqs: [
      {
        question: 'What parts of New Caney do you serve?',
        answer: 'We serve all of New Caney, including the master-planned communities of Tavola and Valley Ranch, the homes near the original town center along Caney Creek, and the growing developments near the Grand Parkway and FM 1485. New builds and older homes alike, we cover them all.'
      },
      {
        question: 'My New Caney home is a new build. Do I still need HVAC maintenance?',
        answer: 'It matters more here than in most towns. New Caney has grown so fast that a large share of the systems out there have not even hit their second summer, and the manufacturer paperwork behind that warranty almost always lists an annual maintenance visit as a condition, not a suggestion. We log the visit, note the system condition, and hand you a copy for your records so a coil or compressor that fails early is not coming out of your pocket.'
      },
      {
        question: 'How fast can you reach New Caney for emergency HVAC service?',
        answer: 'Fast. Our shop sits on US-59 in Conroe, which puts most of New Caney within about a twenty-minute drive, so same-day is the rule rather than the exception. Emergency calls outside our normal 8am to 9pm hours go straight to a technician, not a voicemail box, through 9pm every night. Dial (936) 331-1339.'
      },
      {
        question: 'Does AMW handle every kind of HVAC work in New Caney, not just AC?',
        answer: 'Yes. Beyond AC repair and installation, we handle heating repair, seasonal maintenance, indoor air quality equipment, smart thermostats, and dryer vent cleaning for New Caney homes and businesses, all backed by the same veteran-owned team and upfront pricing.'
      },
      {
        question: 'Do you offer financing on a new system in New Caney?',
        answer: 'We do. A lot of New Caney homeowners are already carrying a new mortgage, so we work with Synchrony and FTL Finance to spread out the cost of a full system replacement or a major repair. Ask about it when we quote the job and we will walk through the numbers before anything gets scheduled.'
      }
    ]
  },
  'splendora-tx': {
    town: 'Splendora',
    faqs: [
      {
        question: 'Do you serve the whole Splendora 77372 area?',
        answer: 'Yes. We cover Splendora and the 77372 area, from newer neighborhoods like The Canopies and the growth out in Townsend Reserve to established subdivisions such as Rio Vista and the acreage homes on Northcrest Ranch. Whether you are near the Splendora ISD campuses off FM 2090 or set back on a wooded lot, we are ready to help.'
      },
      {
        question: 'My Splendora home is a new build under warranty. Do I need maintenance?',
        answer: 'It depends on the builder, but most require it. Builders putting up homes in The Canopies typically use manufacturer warranties that only stay valid with a documented service record, so a skipped or untracked maintenance visit can quietly void coverage before you ever need it. We log every visit in writing, which protects you if you ever have to file a claim.'
      },
      {
        question: 'Does AMW provide emergency heating and cooling service in Splendora?',
        answer: 'We treat a dead AC in August and a furnace that will not fire in December the same way: as an emergency, not something that waits for the next opening. Because we are based in Conroe, most Splendora calls, whether you are near FM 2090 or out toward Old Highway 59, get a technician out same-day. We are open 8am to 9pm seven days a week, and after-hours emergency service runs from 5pm to 9pm. Call (936) 331-1339.'
      },
      {
        question: 'Is AMW licensed, insured, and veteran owned to work in Splendora?',
        answer: 'Yes. We are a veteran owned company, fully licensed under TACLB133920E, insured, and bonded. You get honest, upfront pricing before any work starts, backed by a 5.0-star Google rating from neighbors across Splendora and East Montgomery County.'
      },
      {
        question: 'Do you offer financing for HVAC work in Splendora?',
        answer: 'We do, through Synchrony and FTL Finance. Whether you are replacing an aging system in one of the older homes off Old Highway 59 or adding a unit for an addition on an acreage property, financing spreads the cost out instead of forcing a decision under pressure. Ask about the current plans when we come out for your free estimate.'
      }
    ]
  },
  'porter-tx': {
    town: 'Porter',
    faqs: [
      {
        question: 'What areas of Porter do you serve?',
        answer: 'We serve all of Porter and the 77365 area, including The Highlands master-planned community and the neighborhoods along FM 1314, FM 1485, US-59, and the Grand Parkway. From new construction to established homes, our veteran-owned team covers the full Porter area.'
      },
      {
        question: 'My Porter home is in a new community. Should I keep up maintenance?',
        answer: 'Keep it up, and keep the paperwork. Almost every system installed in The Highlands or Valley Ranch in the last few years is still inside its manufacturer warranty window, but that coverage usually comes with a catch: skip the annual documented maintenance and the manufacturer can deny a claim later. We handle the tune-up and the documentation together, so if something does fail down the road, you are not stuck paying for a repair that should have been covered.'
      },
      {
        question: 'How fast can you reach Porter for emergency AC repair?',
        answer: 'Porter sits close enough to our Conroe shop, just down US-59, that a technician reaching you the same day is the norm, and the newer Grand Parkway segments have only shaved more time off that drive. If your AC dies well after most companies have gone home, we are still taking calls right up until 9pm, seven nights a week, so you are not stuck waiting until morning. Call (936) 331-1339.'
      },
      {
        question: 'What HVAC brands do you install and repair in Porter?',
        answer: 'We service and install all major brands, including Carrier, Trane, Lennox, Goodman, Rheem, and York. Whether you need a repair on an older unit or a new high-efficiency system for a home near the Grand Parkway, we can help you choose the right equipment.'
      },
      {
        question: 'Do you offer financing on new systems in Porter?',
        answer: 'Yes, through Synchrony and FTL Finance. It comes up often in Porter, where homeowners are frequently weighing whether to patch an aging system near the old town center or replace it outright, and financing is usually what tips the decision toward replacing. We lay out the monthly options side by side with repair costs so you can compare before committing to either one.'
      }
    ]
  },
  'cut-and-shoot-tx': {
    town: 'Cut and Shoot',
    faqs: [
      {
        question: 'Do you serve Cut and Shoot?',
        answer: 'Yes. Cut and Shoot sits just about 6 miles east of Conroe along State Highway 105, right next door to our home base, so it is one of the closest communities we serve. We cover the homes near the city center and the surrounding 77306 and 77303 areas for the full range of HVAC work.'
      },
      {
        question: 'How fast can AMW respond to a service call in Cut and Shoot?',
        answer: 'Six miles is not much of a drive, which is the point of running our shop out of Conroe. Repair, install, or a maintenance visit, a same-day appointment is realistic for most Cut and Shoot calls along SH-105. Doors are open 8am to 9pm every day, and if your system goes down after that, our after-hours emergency line runs until 9pm. Reach us at (936) 331-1339.'
      },
      {
        question: 'Do you service HVAC on rural and acreage properties near Cut and Shoot?',
        answer: 'Yes. A lot of homes in and around Cut and Shoot sit on larger lots with longer duct runs or multiple systems, and we also work on the mobile and manufactured homes common out on the acreage. Our technicians are comfortable diagnosing airflow, balance, and sizing issues that come up more often on rural properties.'
      },
      {
        question: 'Does AMW handle more than AC repair in Cut and Shoot?',
        answer: 'Yes. Beyond AC repair, we handle AC installation, heating repair, HVAC maintenance, indoor air quality, smart thermostat installation, and dryer vent cleaning for homes throughout Cut and Shoot and the surrounding acreage. We are a full-service HVAC contractor, not just a repair outfit, so one call covers whatever your system needs.'
      },
      {
        question: 'Do you offer financing for a new system near Cut and Shoot?',
        answer: 'A full system replacement on a larger rural property is rarely a small bill, so yes, we work with Synchrony and FTL Finance to spread the cost out. Ask about it when we come out for your free estimate and we will walk you through what a monthly payment actually looks like before any work starts.'
      }
    ]
  },
  'shenandoah-tx': {
    town: 'Shenandoah',
    faqs: [
      {
        question: 'Do you serve Shenandoah, right off I-45?',
        answer: 'Yes. Shenandoah sits along I-45 just south of Conroe and next to The Woodlands, so it is one of our closest and most convenient service areas. We cover Shenandoah homes and businesses in the 77381, 77384, and 77385 areas for the full range of HVAC services.'
      },
      {
        question: 'Do you service both homes and commercial spaces in Shenandoah?',
        answer: 'Yes. Shenandoah has a strong mix of residential neighborhoods and commercial and retail space along the I-45 corridor. Our technicians handle residential split systems as well as light commercial equipment, so we can keep both your home and your business comfortable.'
      },
      {
        question: 'Do you offer emergency heating and cooling service in Shenandoah?',
        answer: 'Yes, and same-day is the norm here rather than the exception, since Shenandoah sits close to our Conroe base. Regular hours run 8am to 9pm every day, with after-hours emergency coverage from 5 to 9pm, so a Friday-night rooftop unit failure at Metropark Square gets the same response as a Tuesday-morning house call in Shenandoah Valley. Reach us at (936) 331-1339.'
      },
      {
        question: 'What HVAC equipment do you service in Shenandoah?',
        answer: 'We work on complete heating and cooling systems for both homes and businesses, including central air conditioners, furnaces, heat pumps, thermostats, and indoor air quality equipment, from every major brand such as Carrier, Trane, Lennox, Goodman, Rheem, and York. Our technicians handle residential split systems as well as the light-commercial units common along the I-45 corridor.'
      },
      {
        question: 'Do you offer financing on new systems in Shenandoah?',
        answer: 'A new system for a Shenandoah Valley home, or a bigger repair on a commercial rooftop unit, is easier to manage with financing through Synchrony and FTL Finance. Ask your technician about the options when we quote the job at your free estimate, and the price we quote is the price you pay.'
      }
    ]
  },
  'pinehurst-tx': {
    town: 'Pinehurst',
    faqs: [
      {
        question: 'What areas of Pinehurst do you serve?',
        answer: 'We serve Pinehurst and the surrounding 77362, 77354, and 77355 areas, including Decker Oaks Estates and the neighborhoods along FM 1774. From established homes to newer builds near Magnolia, our veteran-owned team covers the full Pinehurst area.'
      },
      {
        question: 'Do you service larger lots and acreage homes around Pinehurst?',
        answer: 'Yes. Many Pinehurst-area homes sit on bigger, wooded lots with longer duct runs or more than one system. Our technicians are comfortable working on these setups and can track down airflow and balance issues that show up more often on larger properties.'
      },
      {
        question: 'What makes HVAC service different in Pinehurst compared to other areas?',
        answer: 'Pinehurst sits in the piney woods northwest of Houston, where humidity stays high through the long cooling season and wooded, oversized lots are common. That mix means we see everything from brand-new systems still under warranty in the ZIP 77362 subdivisions to older equipment on established acreage homes, often with longer duct runs to match the bigger lots. We size and maintain whole-home systems with all of that in mind so your house stays comfortable year-round.'
      },
      {
        question: 'How quickly can AMW respond to a heating or cooling emergency in Pinehurst?',
        answer: 'Pinehurst is an easy run down FM 1774 from the Conroe and Magnolia area, so we can usually get to you the same day, whether the problem is a failed air conditioner or a furnace that will not start. We are open 8am to 9pm seven days a week, with after-hours emergency service from 5pm to 9pm. Call (936) 331-1339 for any heating or cooling emergency.'
      },
      {
        question: 'Do you offer financing for a new system in Pinehurst?',
        answer: 'We do, through Synchrony and FTL Finance, with plans built around a range of credit situations. A lot of the calls we get in the newer ZIP 77362 subdivisions are about protecting a system that is already under warranty rather than replacing one outright, but when a full install or a major repair is the right call, we lay out the payment options and give you honest pricing before any work starts.'
      }
    ]
  }
};
