import { demo_banner, demo_com_pfp } from "../assets/images/images";

const BoardHeader = () => {
  return (
    <>
      {/* banner */}
      <div>
        <img src={demo_banner} alt="banner" className="h-20 w-full bg-cover" />
      </div>

      {/* page pic */}
      <div className="bg-threadspace-header">
        <div className="mx-4 relative flex">
          <div className="h-20 w-20 rounded-full overflow-hidden relative -top-3 border-4 border-white-100 bg-white-400">
            <img src={demo_com_pfp} alt="com_pfp" />
          </div>

          {/* page title */}
          <div className="pt-2 pl-4">
            <h1 className="text-gray-800 text-3xl">Title for page of devs</h1>

            {/* page name */}
            <h5 className="text-gray-700">#devsfromindia</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardHeader;
