import PageContainer from "../components/layout/PageContainer";
import Heading from "../components/atoms/Heading";

const ReviewPage = () => {
  return (
    <PageContainer>
      <Heading level={1}>Review & Reflect</Heading>
      <p className="mt-4 text-sm text-gray-600">
        This page will show past entries, date filters, and suggest changes.
      </p>
    </PageContainer>
  );
};

export default ReviewPage;
