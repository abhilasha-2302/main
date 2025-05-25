import Layout from "@/components/layout/Layout";

export default function CopyrightPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Copyright - DMCA</h1>
            <div className="w-24 h-1 bg-green-600"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">COPYRIGHT POLICY</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Veripoint Technologies, Inc. ("<strong>Veripoint</strong>") respects the intellectual property rights of others and expects its users to do the same.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              It is Veripoint's policy, in appropriate circumstances and at its discretion, to disable and/or terminate the accounts of users who repeatedly infringe or are repeatedly charged with infringing the copyrights or other intellectual property rights of others.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              In accordance with the Digital Millennium Copyright Act of 1998, Veripoint will
              respond expeditiously to claims of copyright infringement committed using the
              Veripoint website or other online network accessible through a mobile device or
              other type of device (the "Sites") that are reported to Veripoint's Designated
              Copyright Agent, identified in the sample notice below.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              If you are a copyright owner, or are authorized to act on behalf of
              one, and believe your work has been posted on the Sites in a manner
              that constitutes copyright infringement, please submit a DMCA
              Notice of Alleged Infringement and deliver it to Veripoint's
              Designated Copyright Agent.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed font-semibold">
              Your notice should include the following:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-6">DMCA Notice of Alleged Infringement ("Notice")</h3>

            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>1.</strong> Identify the copyrighted work that you claim has been
                  infringed, or — if multiple copyrighted works are covered by this
                  Notice — you may provide a representative list of the copyrighted
                  works that you claim have been infringed.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>2.</strong> Identify the material that you claim is infringing
                  (or to be the subject of infringing activity) and that is to be removed
                  or access to which is to be disabled, and information reasonably
                  sufficient to permit us to locate the material, including at a minimum,
                  if applicable, the URL of the link shown on the Site(s) where such
                  material may be found.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>3.</strong> Provide your mailing address, telephone number, and,
                  if available, email address.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>4.</strong> Include both of the following statements in the body of the Notice:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li className="text-gray-700 leading-relaxed">
                    "I hereby state that I have a good faith belief that the disputed use of
                    the copyrighted material is not authorized by the copyright
                    owner, its agent, or the law (e.g., as a fair use)."
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    "I hereby state that the information in this Notice is accurate and, under
                    penalty of perjury, that I am the owner, or authorized to act on behalf of
                    the owner, of the copyright or of an exclusive right under the
                    copyright that is allegedly infringed."
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>5.</strong> Provide your full legal name and your electronic or physical signature.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Deliver this Notice, with all items completed, to Veripoint's Designated Copyright Agent:
              </h3>

              <div className="space-y-2 text-gray-700">
                <p><strong>Copyright Agent c/o Veripoint Technologies, Inc.</strong></p>
                <p>675 Almanor Avenue</p>
                <p>Sunnyvale, CA 94085</p>
                <p><strong>Email Address:</strong> veripointcopyrightnoticeagent@veripoint.com</p>
                <p><strong>Telephone Number:</strong> (650) 584-5000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
