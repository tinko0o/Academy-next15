import { Instructor } from "./user";
// //=not used yet
// export type Badge = {
//   _class: "ds_course_badge";
//   id: string;
//   badge_text: string;
//   badge_family: string;
//   context_info: {
//     category: {
//       id: number;
//       title: string;
//       url: string;
//       tracking_object_type: string;
//     };
//     subcategory: null;
//     label: {
//       id: number;
//       display_name: string;
//       title: string;
//       topic_channel_url: string;
//       url: string;
//       tracking_object_type: string;
//     };
//   };
// };
// export type Locale = {
//   _class: "locale";
//   locale: string;
//   title: string;
//   english_title: string;
//   simple_english_title?: string;
// };
export type Course = {
  id: number;
  title: string;
  url: string;
  is_paid: boolean;
  visible_instructors: Instructor[];
  is_practice_test_course: boolean;
  image: string;
  // published_title: string;
  // tracking_id: string;
  // locale: Locale;
  headline: string;
  num_subscribers: number;
  // caption_locales: Locale[];
  avg_rating: number;
  // avg_rating_recent: number;
  rating: number;
  num_reviews: number;
  is_wishlisted: boolean;
  num_published_lectures: number;
  // num_published_practice_tests: number;
  is_in_user_subscription: boolean;
  // has_closed_caption: boolean;
  // caption_languages: string[];
  created: string;
  instructional_level: string;
  // instructional_level_simple: string;
  // content_length_practice_test_questions: number;
  is_user_subscribed: boolean;
  buyable_object_type: string;
  published_time: string;
  objectives_summary: string[];
  is_recently_published: boolean;
  last_update_date: string;
  preview_url: string;
  learn_url: string;
  // is_in_personal_plan_collection: boolean;
  // has_508_closed_captions: boolean;
  // is_coding_exercises_badge_eligible: boolean;
  // predictive_score: number | null;
  // relevancy_score: number | null;
  // input_features: any;
  // lecture_search_result: any;
  // curriculum_lectures: any[];
  // order_in_results: number | null;
  // curriculum_items: any[];
  // instructor_name: string | null;
  // content_info: string;
  // content_info_short: string;
  // bestseller_badge_content?: Badge;
  // badges: Badge[];
  // free_course_subscribe_url: string | null;
  // context_info: {
  //   category: {
  //     id: number;
  //     title: string;
  //     url: string;
  //     tracking_object_type: string;
  //   };
  //   subcategory: null;
  //   label: {
  //     id: number;
  //     display_name: string;
  //     title: string;
  //     topic_channel_url: string;
  //     url: string;
  //     tracking_object_type: string;
  //   };
  // };
};

// image_50x50: string;
// image_100x100: string;
// image_125_H: string;
// image_240x135: string;
// image_304x171: string;
// image_480x270: string;
// image_750x422: string;
