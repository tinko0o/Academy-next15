import CategoryTabs from "@/components/global/category-tabs";
import ExploreSlider from "@/components/global/slider/explore-slider";

const ProfessionalsSkillsFilter = () => {
  return (
    <div className="container">
      <div className="my-4">
        <h2 className=" font-bold dark:text-white text-xl sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
          All the skills you need in one place
        </h2>
        <p className="text-body-color  text-lg sm:text-lg sm:leading-tight md:text-xl md:leading-tight">
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>
      </div>
      <CategoryTabs
        categories={[
          "Data Science",
          "Python",
          "Web Development",
          "Communication",
        ]}
      />
      <ExploreSlider />
    </div>
  );
};

export default ProfessionalsSkillsFilter;
