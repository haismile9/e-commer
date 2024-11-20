import React from "react";

const Banner = () => {
  const title = (
    <p className="h2 fw-light">
      Tìm thứ bạn cần trong{" "}
      <span className="text-warning fw-semibold">hàng nghìn</span> sản phẩm của
      chúng tôi
    </p>
  );
  const description = "Chúng tôi luôn có sẵn thứ bạn cần";

  const bannerList = [
    {
      iconName: "icofont-users-alt-4",
      text: "1.5 Million Customers",
    },
    {
      iconName: "icofont-notification",
      text: "More then 2000 Marchent",
    },
    {
      iconName: "icofont-globe",
      text: "Buy Anything Online",
    },
  ];
  return (
    <header className="header">
      {/* header content */}
      <div className="hero text-white py-7">
        <div className="container-lg">
          <div className="text-container p-4 d-flex flex-column justify-content-center align-items-center">
            {title}
          </div>
          {/* form input search */}
          <div className="form-container px-sm-3 px-md-5 px-lg-7">
            <form>
              <div className="input-group my-2">
                <span className="input-group-text border-0  rounded-start-5">
                  <i className="icofont-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-end-5 shadow"
                  name="search"
                  id="search"
                  placeholder="Bạn tìm gì?"
                  value={null}
                  onChange={null}
                />
              </div>
            </form>
          </div>
          <p className="h5 fw-light mt-4 text-center">{description}</p>
          <ul className="normal-ul d-flex flex-column flex-sm-row justify-content-between align-items-center flex-wrap mt-4">
            <li className="p-2 bg-white rounded-2 shadow-sm mb-2">Test</li>
          </ul>
        </div>
      </div>
      <svg
        className="frame-decoration"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 192.275"
      >
        <defs>
          <style>{".cls-1 {fill: #f3f6f9;}"}</style>
        </defs>
        <title>{"frame-decoration"}</title>
        <path
          className="cls-1"
          d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
          transform="translate(0 -158.755)"
        />
</svg>
    </header>
  );
};

export default Banner;
