const AccessibilityComponent = () => {
  return (
    <section className="pt-12 pb-32 px-6 lg:px-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-5xl 4xl:mx-auto">
          <p className="text-lg text-blue-600 mb-8">
            MyStaff is designed to support accessible use by a wide range of
            users. We aim to meet the Web Content Accessibility Guidelines
            (WCAG) 2.1 level AA where reasonably practicable. This includes
            support for keyboard navigation, sufficient colour contrast, alt
            text/labels on interactive controls, and compatibility with common
            screen readers for core user journeys (policy search, browse, and
            document access).
          </p>

          <h3 className="text-xl font-semibold text-blue-600">
            Feedback and alternatives:
          </h3>
          <p className="text-lg text-blue-600 mb-8">
            If you encounter any accessibility barriers, contact{" "}
            <a
              href="mailto:Support@Diligram.com"
              className="text-blue-600 hover:underline"
            >
              Support@Diligram.com
            </a>
            . We will acknowledge accessibility reports and provide a response
            path under our Incident Management process.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">
            Scope and exclusions:
          </h3>
          <p className="text-lg text-blue-600 mb-8">
            Some embedded third-party content or legacy attachments may not
            fully meet WCAG criteria. We will work with our customers to provide accessible alternatives on request.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">
            Continuous improvement:
          </h3>
          <p className="text-lg text-blue-600 mb-8">
            Accessibility issues are triaged under our standard backlog process
            with priority given to issues that materially impact access to
            critical policy content.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">
            Due diligence:
          </h3>
          <p className="text-lg text-blue-600">
            We support Trust-led and vendor-led accessibility assessments. We
            will share evidence upon request and address identified issues
            within the Change/CSI process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityComponent;
