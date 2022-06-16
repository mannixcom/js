const redirectMapping = {
  "/test-redirector": "https://www.google.com",
  "/summer-camp/united-states/summer-camp-usa": "/summer-camp/camp-usa",
  "/summer-camp/united-states/summer-camp-usa/why-summer-camp": "/summer-camp/camp-usa/why-summer-camp",
  "/summer-camp/united-states/summer-camp-usa/costs-and-inclusions": "/summer-camp/camp-usa/costs-and-inclusions",
  "/summer-camp/united-states/summer-camp-usa/locations-dates": "/summer-camp/camp-usa/locations",
  "/summer-camp/united-states/summer-camp-usa/roles-activites": "/summer-camp/camp-usa/roles",
  "/summer-camp/united-states/summer-camp-usa/eligibility-visas": "/summer-camp/camp-usa/visas",
  "/summer-camp/united-states/summer-camp-usa/how-it-works": "/summer-camp/camp-usa/how-it-works",
  "/summer-camp/united-states/summer-camp-usa/blogs": "/summer-camp/camp-usa/blogs",
  "/summer-camp/united-states/summer-camp-usa/camp-job-fairs-2022": "/summer-camp/camp-usa",
  "/summer-camp/united-states/summer-camp-usa/find-out-more/how-summer-camp-usa-helps-your-resume": "/summer-camp/camp-usa",
  "/summer-camp/united-states/summer-camp-usa/costs": "/summer-camp/camp-usa/costs-and-inclusions",
  "/summer-camp/united-states/summer-camp-usa/find-out-more/faqs": "/summer-camp/camp-usa/how-it-works",
  "/summer-camp/united-states/summer-camp-usa/how-it-all-works": "/summer-camp/camp-usa/how-it-works",
  "/summer-camp/united-states/summer-camp-usa/what-is-summer-camp/types-of-camps": "/summer-camp/camp-usa/locations",
  "/summer-camp/united-states/summer-camp-usa/what-is-summer-camp/types-of-jobs-at-camp": "/summer-camp/camp-usa/locations",
  "/summer-camp/united-states/summer-camp-usa/what-is-summer-camp/typical-day": "/summer-camp/camp-usa/locations",
  "/summer-camp-usa/what-is-summer-camp/summer-camp-jobs/archery-counselor": "/summer-camp/camp-usa/roles",
  "/summer-camp-usa/what-is-summer-camp/summer-camp-jobs/arts-and-crafts": "/summer-camp/camp-usa/roles",
  "/summer-camp-usa/what-is-summer-camp/summer-camp-jobs/general-camp-counselor": "/summer-camp/camp-usa/roles",
  "/summer-camp-usa/what-is-summer-camp/summer-camp-jobs/gymnastics-coach": "/summer-camp/camp-usa/roles",
  "/summer-camp-usa/what-is-summer-camp/summer-camp-jobs/horse-riding-counselor": "/summer-camp/camp-usa/roles",
  "/summer-camp-usa/what-is-summer-camp/summer-camp-jobs/rock-climbing-counselor": "/summer-camp/camp-usa/roles",
  "/summer-camp-usa/what-is-summer-camp/summer-camp-jobs/special-needs-counselor": "/summer-camp/camp-usa/roles",
  "/summer-camp-usa/what-is-summer-camp/summer-camp-jobs/swimming-specialist": "/summer-camp/camp-usa/roles",
  "/summer-camp-usa/what-is-summer-camp/summer-camp-jobs/tennis-coach": "/summer-camp/camp-usa/roles",
  "/summer-camp-usa/what-is-summer-camp/summer-camp-jobs/water-sports-counselor": "/summer-camp/camp-usa/roles",
  "/summer-camp/united-states/summer-camp-usa/visa-and-eligibility,/summer-camp/camp-usa/visas/uk/blog/travel-stories/internship-usa/memories-that-will-last-a-lifetime-with-internship-usa---part-2,/blog/intern-and-travel/8-alumni-quotes-about-internships-in-london-that-will-instil-wanderlust": "/blog/intern-and-travel/6-alumni-quotes-about-internships-in-london-that-will-instil-wanderlust",

  "/working-holidays/australia/work-australia": "/working-holidays/work-australia",
  "/working-holidays/australia/work-australia/jobs": "/working-holidays/work-australia/jobs",
  "/working-holidays/australia/work-australia/destinations": "/working-holidays/work-australia/destinations",
  "/working-holidays/australia/work-australia/visas": "/working-holidays/work-australia/visas",
  "/working-holidays/australia/work-australia/cost-and-inclusions": "/working-holidays/work-australia/cost-and-inclusions",
  "/working-holidays/australia/work-australia/how-it-works": "/working-holidays/work-australia/how-it-works",
  "/working-holidays/australia/work-australia/itinerary": "/working-holidays/work-australia/itinerary",
  "/uk/blog/travel-stories/work-australia": "/working-holidays/work-australia",
  "/uk/blog/travel-stories/work-australia/how-work-australia-has-changed-my-life": "/working-holidays/work-australia",
  "/uk/blog/travel-stories/work-australia/my-leap-into-the-unknown-on-work-australia": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/nitty-gritty": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/work-australia---job-before-you-go/work-australia-job-before-you-go---fraser-island": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/work-australia---job-before-you-go/work-australia-job-before-you-go---gold-coast": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/work-australia-job-before-you-go---what-job-can-i-do": "/working-holidays/work-australia",
  "/united-states/blogs/travel-stories/work-australia": "/working-holidays/work-australia",
  "/united-states/intern-abroad/professional/essentials-internship-australia/why-australia": "/working-holidays/work-australia",
  "/united-states/work-abroad/working-holiday-packages/australia": "/working-holidays/work-australia",
  "/united-states/work-abroad/working-holiday-packages/australia/nitty-gritty/booking": "/working-holidays/work-australia",
  "/united-states/work-abroad/working-holiday-packages/australia/nitty-gritty/why-bunac": "/working-holidays/work-australia",
  "/united-states/work-abroad/working-holiday-packages/australia/programs/essentials": "/working-holidays/work-australia",
  "/united-states/work-abroad/working-holiday-packages/australia/work-australia---job-before-you-go": "/working-holidays/work-australia",
  "/united-states/work-abroad/working-holiday-packages/australia/work-australia---job-before-you-go/bunac-work-australia--job-before-you-go---gold-coast": "/working-holidays/work-australia",
  "/united-states/work-abroad/working-holiday-packages/australia/work-australia---job-before-you-go/work-australia-job-before-you-go---cairns": "/working-holidays/work-australia",
  "/united-states/work-abroad/working-holiday-packages/australia/work-australia---job-before-you-go/work-australia-job-before-you-go---fraser-island": "/working-holidays/work-australia",
  "/work-australia-job-before-you-go---cairns": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/costs": "/working-holidays/work-australia/cost-and-inclusions",
  "/united-states/work-abroad/working-holiday-packages/australia/costs": "/working-holidays/work-australia/cost-and-inclusions",
  "/uk/work-abroad/working-holiday-packages/australia/group-flights": "/working-holidays/work-australia/how-it-works",
  "/uk/work-abroad/working-holiday-packages/australia/nitty-gritty/faqs": "/working-holidays/work-australia/how-it-works",
  "/united-states/work-abroad/working-holiday-packages/australia/nitty-gritty/faqs": "/working-holidays/work-australia/how-it-works",
  "/uk/work-abroad/working-holiday-packages/australia/job-b4-you-go": "/working-holidays/work-australia/jobs",
  "/uk/work-abroad/working-holiday-packages/australia/jobs": "/working-holidays/work-australia/jobs",
  "/united-states/work-abroad/working-holiday-packages/australia/programs": "/working-holidays/work-australia/jobs",
  "/united-states/work-abroad/working-holiday-packages/australia/programs/ultimate-plus": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/programmes/ultimate-plus": "/working-holidays/work-australia/destinations",
  "/uk/work-abroad/working-holiday-packages/australia/ultimate-fun/ultimate-melbourne": "/working-holidays/work-australia/destinations",
  "/united-states/work-abroad/working-holiday-packages/australia/programs/ultimate-plus-melbourne": "/working-holidays/work-australia/destinations",
  "/uk/work-abroad/working-holiday-packages/australia/ultimate-fun/ultimate-sydney-": "/working-holidays/work-australia/destinations",
  "/intern-in-australia/working-holiday-visa": "/working-holidays/work-australia/visas",
  "/united-states/work-abroad/working-holiday-packages/australia/nitty-gritty": "/working-holidays/work-australia/visas",
  "/united-states/work-abroad/working-holiday-packages/australia/nitty-gritty/visa": "/working-holidays/work-australia/visas",
  "/uk/blog/travel-stories/work-australia/one-month-in-my-bunaustralia-experience-so-far-": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/discover-australia": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/discover-australia/new-south-wales": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/discover-australia/northern-territory": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/discover-australia/queensland": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/discover-australia/south-australia": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/discover-australia/victoria": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/discover-australia/western-australia": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/fun-stuff": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/fun-stuff/arrival-accommodation": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/fun-stuff/padi-learn-to-dive-course": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/fun-stuff/red-centre-experience": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/fun-stuff/skills-package": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/fun-stuff/surf-package": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/fun-stuff/whitsundays-maxi-sailing": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/programmes/ranch-experience": "/working-holidays/work-australia",
  "/uk/work-abroad/working-holiday-packages/australia/work-australia---job-before-you-go/work-australia-job-before-you-go---western-australia": "/working-holidays/work-australia",
  "/united-states/blogs/working-abroad/western-australias-best-kept-secrets-": "/working-holidays/work-australia",
  "/united-states/work-abroad/working-holiday-packages/australia/discover-australia": "/working-holidays/work-australia",
  "/united-states/work-abroad/working-holiday-packages/australia/work-australia---job-before-you-go/work-australia-job-before-you-go---western-australia": "/working-holidays/work-australia",
  "/uk/blog/travel-stories/work-australia/a-day-in-the-life-of-a-bunac-work-australia-participant": "/working-holidays/work-australia/visas",
  "/uk/blog/travel-stories/work-australia/the-beginning-of-my-work-australia-adventure": "/working-holidays/work-australia/visas",
  "/uk/work-abroad/working-holiday-packages/australia/programmes/starter": "/working-holidays/work-australia/visas",
  "/working-holidays/australia/work-australia/essentials": "/working-holidays/work-australia/how-it-works",
  "/working-holidays/australia/work-australia/ultimate/sydney": "/working-holidays/work-australia/destinations",
  "/working-holidays/australia/work-australia/the-fun-stuff/ranch-experience": "/working-holidays/work-australia",
  "/working-holidays/australia/work-australia/the-fun-stuff/wwoof-membership": "/working-holidays/work-australia",
  "/working-holidays/australia/work-australia/terms-conditions": "/working-holidays/work-australia/terms-conditions",
  "/working-holidays/australia/work-australia/faqs": "/working-holidays/work-australia/how-it-works",
  "/working-holidays/australia/work-australia/costs": "/working-holidays/work-australia/cost-and-inclusions",
  "/working-holidays/australia/work-australia/ultimate": "/working-holidays/work-australia",
  "/working-holidays/australia/work-australia/starter": "/working-holidays/work-australia",
  "/working-holidays/australia/work-australia/workaustraliawork-australiainsurance": "/working-holidays/work-australia/how-it-works",
  "/working-holidays/australia/work-australia/ultimate/ultimate": "/working-holidays/work-australia/how-it-works",
  "/working-holidays/australia/work-australia/visa-kick-start": "/working-holidays/work-australia/visas",
  "/working-holidays/australia/work-australia/ultimate/melbourne": "/working-holidays/work-australia/destinations",
  "/united-states/blogs/working-abroad/top-things-to-do-and-see-in-sydney": "/working-holidays/work-australia",
  "/uk/blog/travel-stories/work-australia/why-work-australia-was-the-best-thing-ive-ever-done": "/working-holidays/work-australia",
  "/uk/blog/bunac-blog/work-australia/10-facts-you-didnt-know-about-australia": "/blog/other/10-facts-you-didnt-know-about-australia",
  "/uk/blog/bunac-blog/work-australia/australia-v-new-zealand---which-gap-year-best": "/blog/other/australia-v-new-zealand-which-gap-year-best",
  "/uk/blog/travel-stories/work-australia/dissertation-donesydney-here-i-come": "/blog/other/best-cities-to-work-and-travel",
  "/uk/blog/travel-stories/work-australia/its-all-about-the-west-coast": "/blog/other/best-cities-to-work-and-travel",
  "/uk/blog/bunac-reviews/work-australia-reviews/backpacker-tax-and-visa-updates-": "/blog/other/bunac-australian-backpacker-tax-and-working-holiday-visa-update",
  "/uk/blog/bunac-blog/work-australia": "/blog/other/bunacs-a-z-of-australia",
  "/uk/blog/bunac-blog/work-australia/bunaqanda---wwoof": "/blog/other/bunacs-a-z-of-australia",
  "/uk/blog/bunac-blog/work-australia/getting-a-job-in-australia-if-youre-from-the-uk": "/blog/other/getting-a-job-in-australia-if-youre-from-the-uk",
  "/uk/blog/bunac-blog/work-australia/live-the-dream-down-under-with-our-brand-new-jobs-on-fraser-island": "/blog/other/live-the-dream-down-under-with-our-brand-new-jobs-on-fraser-island",
  "/uk/blog/travel-stories/work-australia/living-and-working-in-the-worlds-most-liveable-city-melbourne": "/blog/other/living-and-working-in-the-worlds-most-liveable-city-melbourne",
  "/uk/blog/travel-stories/work-australia/my-weird-and-wonderful-jobs-in-australia": "/blog/other/my-weird-and-wonderful-jobs-in-australia-farming",
  "/uk/blog/bunac-reviews/work-australia-reviews/strewth-liz-lifts-the-lid-on-life-down-under": "/blog/other/strewth-liz-lifts-the-lid-on-life-down-under",
  "/uk/blog/bunac-blog/work-australia/top-10-must-try-foods-in-australia-and-new-zealand": "/blog/other/top-10-must-try-foods-in-australia-and-new-zealand",
  "/uk/blog/bunac-blog/work-australia/bunacs-top-10-things-to-do-on-fraser-island": "/blog/other/top-10-reasons-to-do-a-working-holiday-in-australia",
  "/uk/blog/bunac-blog/work-australia/top-10-reasons-to-do-a-working-holiday-in-australia": "/blog/other/top-10-reasons-to-do-a-working-holiday-in-australia",
  "/uk/blog/travel-stories/work-australia/top-5-things-to-see-in-hong-kong": "/blog/other/top-10-reasons-to-do-a-working-holiday-in-australia",
  "/uk/blog/bunac-blog/work-australia/top-10-ways-to-celebrate-christmas-down-under": "/blog/other/top-10-ways-to-celebrate-christmas-down-under",
  "/uk/blog/travel-stories/work-australia/my-east-coast-adventure": "/blog/other/top-5-places-to-travel-after-australia",
  "/uk/blog/travel-stories/work-australia/going-rogue": "/blog/other/working-and-living-in-australian-outback",
  "/uk/blog/travel-stories/work-australia/working-and-living-in-australian-outback": "/blog/other/working-and-living-in-australian-outback",
  "/uk/blog/travel-stories/work-australia/working-and-playing-hard-down-under": "/blog/other/working-and-living-in-australian-outback",
  "/united-states/blogs/travel-stories/work-australia/living-the-dream-in-australia": "/blog/other/working-and-living-in-australian-outback",
  "/uk/blog/bunac-reviews/work-australia-reviews/a-year-abroad-australia-according-to-amanda": "/blog/work-and-travel/a-year-abroad-australia-according-to-amanda",
  "/uk/blog/travel-stories/work-australia/perfect-mix-of-work-and-travel-in-oz": "/working-holidays/uk/work-uk",

  "/working-holidays/canada/work-canada": "/working-holidays/work-canada",
  "/working-holidays/canada/work-canada/jobs": "/working-holidays/work-canada/jobs",
  "/working-holidays/canada/work-canada/destinations": "/working-holidays/work-canada/destinations",
  "/working-holidays/canada/work-canada/visas": "/working-holidays/work-canada/visas",
  "/working-holidays/canada/work-canada/cost-and-inclusions": "/working-holidays/work-canada/cost-and-inclusions",
  "/working-holidays/canada/work-canada/how-it-works": "/working-holidays/work-canada/how-it-works",
  "/working-holidays/canada/work-canada/ontario-blue-mountains": "/working-holidays/work-canada/destinations/ontario-blue-mountain",
  "/working-holidays/canada/work-canada/whistler-four-season": "/working-holidays/work-canada/destinations/whistler-four-seasons",
  "/working-holidays/canada/work-canada/visa-eligibility": "/working-holidays/work-canada/visas",
  "/uk/blog/bunac-reviews/work-canada-reviews/annalees-canadian-adventure-is-beginning": "/blog/other/annalees-canadian-adventure-begins",
  "/uk/blog/bunac-blog/work-canada/interview-with-blue-mountain-resort-": "/blog/other/bunac-work-canada-video-whistler-vancouver-and-toronto",
  "/uk/blog/videos/work-canada-video---whistler-vancouver-and-toronto": "/blog/other/bunac-work-canada-video-whistler-vancouver-and-toronto",
  "/uk/blog/bunac-blog/work-canada/how-to-work-a-ski-season-in-canada": "/blog/other/how-to-work-a-ski-season-in-canada"
}

function myCallBack() {
  console.log(arguments);
}
exports.handler = (event, context, callback = myCallBack) => {

  const request = event.Records[0].cf.request;
  const lowercase = request.uri.toLowerCase();
  let updatedRequest = { ...event.Records[0].cf.request };

  let isRedirect = false;

  if (request.uri !== lowercase) {
    updatedRequest.uri = lowercase;
    isRedirect = true;
  }

  if (request.headers.host[0].value === "www.bunac.org") {
    isRedirect = true;
  }

  if (
    redirectMapping[updatedRequest.uri] &&
    redirectMapping[updatedRequest.uri] != updatedRequest.uri
  ) {

    updatedRequest.uri = redirectMapping[updatedRequest.uri];
    isRedirect = true;
  }

  if (isRedirect) {
    const response = {
      status: "301",
      statusDescription: "Moved Permanently",
      headers: {
        location: [
          {
            key: "location",
            value: `https://bunac.org${updatedRequest.uri}`,
          }]
      },
    }
    console.log(JSON.stringify(response, null, 2));
    return callback(null, response);
  } else {
    console.log(JSON.stringify(request, null, 2));
    return callback(null, request);
  }
}
