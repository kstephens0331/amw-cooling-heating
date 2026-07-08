// Per-town local content used by the service-by-town pages
// (ac-repair, ac-installation, heating-repair). Every field here is grounded in
// details already published on the matching /locations/<town> page, so the
// service pages stay locally accurate without inventing new facts. Answers and
// prose are plain ASCII.
//
// Fields:
//   name            display name of the town
//   slug            location page slug (also the service-town URL segment)
//   locationPath    canonical path to the town's location page
//   county          county the town sits in
//   drive           how AMW reaches the town from its Conroe base
//   geography       one sentence on where the town sits and its road context
//   neighborhoods   real, specific neighborhoods/subdivisions we name on-page
//   climate         the town's distinctive climate/humidity angle
//   housing         the mix of housing stock, which drives the HVAC work
//   repairAngle     a repair-specific local note
//   installAngle    an installation-specific local note
//   heatingAngle    a heating-specific local note

export const SERVICE_TOWNS = {
  'conroe-tx': {
    name: 'Conroe',
    slug: 'conroe-tx',
    locationPath: '/locations/conroe-tx',
    county: 'Montgomery County',
    drive: 'right here in Conroe, where our shop is based',
    geography: 'the Montgomery County seat on the shores of Lake Conroe, just off Interstate 45 north of Houston',
    neighborhoods: 'Downtown Conroe, Crighton Ridge, River Plantation, and April Sound',
    climate: 'Conroe summers are long, hot, and humid, and a home this close to Lake Conroe carries extra moisture that a cooling system has to pull out of the air',
    housing: 'a wide mix of housing, from older homes in established neighborhoods to the newer high-efficiency builds going up around the edges of town',
    repairAngle: 'Because we are based in Conroe, we are usually the closest company to your door, which means faster diagnosis when your system quits in the heat.',
    installAngle: 'We size every new Conroe system with a proper load calculation instead of just matching the old unit, so you get the right capacity for the home and the Lake Conroe humidity.',
    heatingAngle: 'Conroe winters are mild but the cold fronts that push through can still drop temperatures fast, so a heating system that has sat unused all summer needs to be ready when you flip it on.'
  },
  'the-woodlands-tx': {
    name: 'The Woodlands',
    slug: 'the-woodlands-tx',
    locationPath: '/locations/the-woodlands-tx',
    county: 'Montgomery County',
    drive: 'about 20 minutes south of our Conroe shop',
    geography: 'a large master-planned community of eight villages just south of Conroe',
    neighborhoods: 'Alden Bridge, Cochran\'s Crossing, Creekside Park, Sterling Ridge, Panther Creek, and Grogan\'s Mill',
    climate: 'the heavy tree canopy that makes The Woodlands beautiful also drops pollen, leaves, and debris that clog outdoor coils and hold in humidity around the house',
    housing: 'well-appointed homes, many with multi-zone systems, variable-speed equipment, and smart thermostats',
    repairAngle: 'Many Woodlands systems are multi-zone or high-efficiency setups, and our technicians are trained to diagnose them without pushing you toward a full replacement when a repair will do.',
    installAngle: 'We handle the multi-zone and variable-speed installs that Woodlands homes often call for, matching the new equipment to the way each village home is built and shaded.',
    heatingAngle: 'Woodlands homes often run heat pumps or dual-fuel systems, and we make sure the changeover and auxiliary heat are set correctly so the house stays warm on the coldest nights without wasting energy.'
  },
  'spring-tx': {
    name: 'Spring',
    slug: 'spring-tx',
    locationPath: '/locations/spring-tx',
    county: 'Harris County',
    drive: 'a short drive south from our Conroe base',
    geography: 'a fast-growing community in northern Harris County, from historic Old Town Spring to the Champions area',
    neighborhoods: 'Old Town Spring, Champions Forest, Klein, Gleannloch Farms, Spring Stuebner, and Cypresswood',
    climate: 'Spring sits just north of Houston and gets the same intense Gulf heat and humidity, with temperatures over 95 degrees from June through September',
    housing: 'a diverse housing stock, from 1970s-era homes in Champions Forest to new construction near the Grand Parkway',
    repairAngle: 'Spring\'s wide range of home ages means we see everything from aging units that need a quick fix to newer systems with tricky electronic controls, and we diagnose both honestly.',
    installAngle: 'On a Spring install we right-size the system for the home rather than the old unit, which matters on 1970s houses that have often been remodeled and added onto over the years.',
    heatingAngle: 'A lot of Spring homes lean on their heat only a handful of weeks a year, so a pre-season check keeps a rarely-used furnace or heat pump from failing on the first hard freeze.'
  },
  'montgomery-tx': {
    name: 'Montgomery',
    slug: 'montgomery-tx',
    locationPath: '/locations/montgomery-tx',
    county: 'Montgomery County',
    drive: 'a quick trip west from our Conroe base',
    geography: 'a lakeside community on the west side of Montgomery County around Lake Conroe',
    neighborhoods: 'Walden on Lake Conroe, Bentwater, April Sound, and the FM 149 corridor',
    climate: 'homes near Lake Conroe deal with extra humidity coming off the water, which strains AC systems and can leave rooms feeling clammy if the equipment is not sized right',
    housing: 'everything from upscale lakefront and golf-community homes to established places near historic downtown Montgomery',
    repairAngle: 'On lakefront Montgomery homes we pay close attention to drain lines, coil condition, and dehumidification, since the moisture near the water shows up first in those parts.',
    installAngle: 'For lakefront and golf-community homes we match the new system to the higher humidity load near Lake Conroe so the house stays cool and dry, not just cold.',
    heatingAngle: 'Lake-effect moisture can make a cold snap feel sharper near Montgomery, so we make sure the heating side is tuned and safe before winter sets in.'
  },
  'willis-tx': {
    name: 'Willis',
    slug: 'willis-tx',
    locationPath: '/locations/willis-tx',
    county: 'Montgomery County',
    drive: 'a short drive up Interstate 45 from Conroe',
    geography: 'a lake community north of Conroe along the I-45 corridor near Lake Conroe',
    neighborhoods: 'Seven Coves, Point Aquarius, Panorama Village, and the homes along FM 830',
    climate: 'lakeside Willis homes face additional moisture that can strain AC systems and promote mold growth if humidity is not managed',
    housing: 'a mix that runs from lakefront homes to rural acreage properties',
    repairAngle: 'On lakeside Willis homes we look hard at humidity control and drainage, because moisture near Lake Conroe is often the real cause behind a musty smell or a system that runs constantly.',
    installAngle: 'For a Willis lakefront or acreage home we size the new system for both the square footage and the moisture load, and longer duct runs on rural lots get checked so the airflow is right.',
    heatingAngle: 'Rural and lakefront Willis homes can sit exposed to wind off the lake, so we make sure the heating system and ductwork are ready before the first cold front.'
  },
  'magnolia-tx': {
    name: 'Magnolia',
    slug: 'magnolia-tx',
    locationPath: '/locations/magnolia-tx',
    county: 'Montgomery County',
    drive: 'a straight run out FM 1488 from the Conroe area',
    geography: 'a growing community on the west side of the county along the FM 1488 and FM 1774 corridors',
    neighborhoods: 'Woodforest, Mostyn Manor, and the surrounding ranch and acreage properties',
    climate: 'Magnolia gets the same hot, humid Southeast Texas summers as the rest of the region, which pushes a cooling system hard from spring through fall',
    housing: 'a real mix of master-planned neighborhoods alongside established ranch and acreage homes on larger lots',
    repairAngle: 'Larger Magnolia lots often mean longer duct runs and sometimes more than one system, so we trace airflow and balance problems that show up more on bigger homes.',
    installAngle: 'On acreage Magnolia homes we account for longer duct runs and multiple zones when we size and lay out a new system, so every room actually gets the air it needs.',
    heatingAngle: 'Bigger Magnolia homes on open lots lose heat faster on a cold, windy night, so correct sizing and sealed ductwork make a real difference in comfort and cost.'
  },
  'tomball-tx': {
    name: 'Tomball',
    slug: 'tomball-tx',
    locationPath: '/locations/tomball-tx',
    county: 'Harris County',
    drive: 'a manageable drive to the northwest Houston area',
    geography: 'a community on the northwest side of the Houston metro',
    neighborhoods: 'the established and newer neighborhoods across the Tomball area',
    climate: 'Tomball shares the humid Gulf-coast climate of greater Houston, so your AC carries a heavy moisture load through the long cooling season',
    housing: 'a mix of older homes and newer high-efficiency systems',
    repairAngle: 'We diagnose the actual cause of a Tomball breakdown, whether it is a failed capacitor, low refrigerant, or a drainage problem, and quote it upfront before any work starts.',
    installAngle: 'A Tomball install starts with a proper load calculation so the new system fits the home and the humidity, not just the size of the unit it replaces.',
    heatingAngle: 'Tomball homes only need heat for short stretches, so a quick pre-season check keeps a seldom-used system from letting you down on the coldest days.'
  },
  'new-caney-tx': {
    name: 'New Caney',
    slug: 'new-caney-tx',
    locationPath: '/locations/new-caney-tx',
    county: 'Montgomery County',
    drive: 'a straight shot down US-59 from our Conroe base',
    geography: 'a fast-growing community in East Montgomery County along the I-69 / US-59 corridor and the Grand Parkway',
    neighborhoods: 'Tavola, Valley Ranch, the homes near the original town center along Caney Creek, and the developments near FM 1485',
    climate: 'New Caney sits in the humid piney woods of East Montgomery County, so cooling equipment has to remove a lot of moisture along with the heat',
    housing: 'a real mix, with new master-planned builds still under warranty next to older homes near the town center that often need repair or replacement',
    repairAngle: 'On newer New Caney homes in Tavola or Valley Ranch, a repair often ties back to warranty coverage, so we document the work to help keep that manufacturer warranty intact.',
    installAngle: 'When an older New Caney system finally gives out, we size the replacement with a full load calculation so the new high-efficiency unit fits the home and the humid climate.',
    heatingAngle: 'New builds off SH-99 often run heat pumps, and we set the changeover and backup heat correctly so the system stays efficient when a cold front rolls through.'
  },
  'splendora-tx': {
    name: 'Splendora',
    slug: 'splendora-tx',
    locationPath: '/locations/splendora-tx',
    county: 'Montgomery County',
    drive: 'an easy run along US-59 and I-69 from Conroe',
    geography: 'a small East Montgomery County town in the 77372 area along the US-59 / I-69 corridor',
    neighborhoods: 'The Canopies, Townsend Reserve, Rio Vista, and the acreage homes on Northcrest Ranch',
    climate: 'Splendora sits in the humid piney woods, so a cooling system works through a long, moisture-heavy season each year',
    housing: 'a mix of newer master-planned builds and older ranch-style and single-family homes on larger lots',
    repairAngle: 'Splendora ranges from brand-new systems in The Canopies to decades-old units out on the acreage, and we repair both, documenting warranty work on the newer ones.',
    installAngle: 'On a Splendora acreage home we account for longer duct runs and the humid load when sizing the new system, so it cools and dehumidifies the whole house evenly.',
    heatingAngle: 'The cold fronts that push down through the piney woods can arrive fast, so we make sure a Splendora heating system that sat idle all summer is safe and ready.'
  },
  'porter-tx': {
    name: 'Porter',
    slug: 'porter-tx',
    locationPath: '/locations/porter-tx',
    county: 'Montgomery County',
    drive: 'a quick trip down US-59 from Conroe',
    geography: 'a growing community in the 77365 area along US-59, FM 1314, FM 1485, and the Grand Parkway',
    neighborhoods: 'The Highlands master-planned community and the neighborhoods along FM 1314 and FM 1485',
    climate: 'Porter shares the humid East Montgomery County climate, so a cooling system carries a steady moisture load through the long summer',
    housing: 'a fast-growing mix of new master-planned homes and established properties',
    repairAngle: 'Many Porter homes in newer communities like The Highlands are still under warranty, so we document the repair to help protect that coverage.',
    installAngle: 'For a Porter install we run a proper load calculation and match the new system to the home and the humidity, whether it is new construction or a replacement in an older house.',
    heatingAngle: 'New Porter homes often run heat pumps, and we make sure the changeover and auxiliary heat are dialed in so the house stays warm and efficient in a cold snap.'
  },
  'cut-and-shoot-tx': {
    name: 'Cut and Shoot',
    slug: 'cut-and-shoot-tx',
    locationPath: '/locations/cut-and-shoot-tx',
    county: 'Montgomery County',
    drive: 'only about 6 miles east of our Conroe shop along State Highway 105',
    geography: 'a small community just east of Conroe along State Highway 105 in the 77306 and 77303 areas',
    neighborhoods: 'the homes near the city center and the surrounding rural and acreage properties',
    climate: 'Cut and Shoot shares the hot, humid summers of the rest of Montgomery County, which keeps a cooling system working hard for months',
    housing: 'a mix that leans toward rural and acreage homes on larger lots',
    repairAngle: 'Because Cut and Shoot is just minutes east of our shop, we can usually get out for a repair fast, which matters most on a hot afternoon.',
    installAngle: 'On rural Cut and Shoot properties we check duct runs and system layout carefully during an install, since larger and older homes often need airflow corrected along with new equipment.',
    heatingAngle: 'Acreage homes around Cut and Shoot can sit exposed on open land, so we make sure the heating system and ductwork are sealed and ready before winter.'
  },
  'shenandoah-tx': {
    name: 'Shenandoah',
    slug: 'shenandoah-tx',
    locationPath: '/locations/shenandoah-tx',
    county: 'Montgomery County',
    drive: 'a short hop down Interstate 45 from Conroe',
    geography: 'a small city along I-45 just south of Conroe and next to The Woodlands, in the 77381, 77384, and 77385 areas',
    neighborhoods: 'the residential neighborhoods and the commercial and retail corridor along I-45',
    climate: 'Shenandoah carries the same humid Gulf-coast heat as the rest of the region, so both homes and businesses lean hard on their cooling systems',
    housing: 'a strong mix of residential neighborhoods and light commercial and retail space',
    repairAngle: 'Shenandoah has a lot of commercial space along I-45, and we handle both residential split systems and light commercial units when something goes down.',
    installAngle: 'Whether it is a home or a light commercial space in Shenandoah, we size the new system to the actual load so it runs efficiently along the busy I-45 corridor.',
    heatingAngle: 'Businesses and homes in Shenandoah both need reliable heat on the coldest days, so we check and tune the heating side before the season turns.'
  },
  'pinehurst-tx': {
    name: 'Pinehurst',
    slug: 'pinehurst-tx',
    locationPath: '/locations/pinehurst-tx',
    county: 'Montgomery County',
    drive: 'an easy run down FM 1774 from the Conroe and Magnolia area',
    geography: 'a community northwest of Houston in the 77362, 77354, and 77355 areas along FM 1774',
    neighborhoods: 'Decker Oaks Estates and the neighborhoods along FM 1774 near Magnolia',
    climate: 'Pinehurst sits in the piney woods where humidity stays high through the long cooling season, adding to the load on a home\'s AC',
    housing: 'a mix of established homes and newer builds, many on larger, wooded lots',
    repairAngle: 'Larger, wooded Pinehurst lots often have longer duct runs or more than one system, so we track down the airflow and balance issues that come with bigger homes.',
    installAngle: 'On a Pinehurst acreage home we size and lay out the new system for longer duct runs and multiple zones, so every room gets proper airflow.',
    heatingAngle: 'Bigger Pinehurst homes on open, wooded lots lose heat faster on a cold night, so correct sizing and sealed ducts keep the whole house comfortable.'
  }
};

// Ordered list used to generate the service-town pages and sitemap entries.
export const SERVICE_TOWN_ORDER = [
  'conroe-tx',
  'the-woodlands-tx',
  'spring-tx',
  'montgomery-tx',
  'willis-tx',
  'magnolia-tx',
  'tomball-tx',
  'new-caney-tx',
  'splendora-tx',
  'porter-tx',
  'cut-and-shoot-tx',
  'shenandoah-tx',
  'pinehurst-tx'
];
