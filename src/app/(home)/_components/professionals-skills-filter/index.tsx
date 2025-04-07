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
      {/* <div className="flex">
        <GroupCard
          tagUrl="complete-python-bootcamp"
          price="1000"
          rateCount={"10000"}
          rating="4"
          subTilte="Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
          thumbnail={
            "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg"
          }
          tilte="The Complete Python Bootcamp From Zero to Hero in Python"
        />
        <GroupCard
          tagUrl="complete-python-bootcamp"
          price="1000"
          rateCount={"10000"}
          rating="4"
          subTilte="Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
          thumbnail={
            "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg"
          }
          tilte="The Complete Python Bootcamp From Zero to Hero in Python"
          bestSeller={true}
        />
      </div> */}
    </div>
  );
};

export default ProfessionalsSkillsFilter;
