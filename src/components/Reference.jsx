

export const Reference = () => {
  return (
    <div>
         <div id="references">
      <div
        className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0"
      >
        <img src="/logo-google.png" alt="" />
        <img src="/logo-ibm.png" alt="" />
        <img src="/logo-microsoft.png" alt="" />
        <img src="/logo-hp.png" alt="" />
        <img src="/logo-vector-graphics.png" alt="" />
      </div>
    </div>

    {/* <!-- Bottom CTA Section --> */}
    <div id="bottom">
      <div className=" ml-auto mr-auto max-w-xl pl-8 pr-8 text-center my-20">
        <h3>Clipboard for iOS and MacOS</h3>
        <p className="section-content mb-10 text-xl">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </p>

        {/* <!-- Button Container --> */}
        <div className="btn_container">
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </div>

    </div>
  )
}

