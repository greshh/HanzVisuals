import Footer from "../footer";

export default function TermsAndConditions() {
  return (
    <div>
      <div className="w-full h-fit bg-black relative">
        <div className="absolute inset-0 bg-[url('/terms-and-conditions/film-grain-texture.png')] bg-[length:100%_auto] bg-repeat-y opacity-50 z-0"/>
        <div className="relative z-10 flex flex-col gap-5 py-16 md:py-28 px-10 md:px-52 text-white">
          <div className="flex flex-col items-center">
            <h1 className="font-humane text-7xl md:text-9xl font-semibold tracking-wider text-center">{("Standard Terms & Licensing").toUpperCase()}</h1>
            <p className="font-anonymouspro mb-6 text-sm md:text-lg italic font-bold tracking-wide">Version: September 2026</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">These Standard Terms & Licensing apply to photography, videography and other creative media services provided by HanzVisuals ("HanzVisuals", "we", "us" or "our") unless different terms are agreed in writing with the client.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">By confirming a booking after receiving these terms, signing an agreement incorporating these terms, or making payment toward a confirmed booking, the client agrees to these terms.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Bookings and Scope").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">The scope of each booking will be agreed between HanzVisuals and the client before the booking is confirmed. This may include the event or project, date and location, coverage period, deliverables, price and any other specific requirements.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Only services and deliverables specifically agreed upon are included in the quoted price.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Requests for additional coverage, deliverables, revisions or other work outside the agreed scope may incur an additional charge. Any additional charges will be communicated and agreed upon before that additional work is undertaken.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Booking Confirmation and Deposits").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Where a deposit is required, a booking is not considered secured until the required deposit has been received.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Unless otherwise agreed, HanzVisuals may require a 50% deposit to secure a booking, with the remaining balance payable according to the terms stated on the applicable invoice or agreement.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Deposits may be used to cover time reserved for the booking, preparation and other costs incurred in connection with the project.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Payment").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Payment must be made by the due date stated on the applicable invoice.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">The client should contact HanzVisuals as soon as possible if there is an issue that may prevent payment by the agreed date.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">HanzVisuals may withhold final deliverables until outstanding amounts relating to the booking have been paid.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Cancellation and Rescheduling").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">If the client needs to cancel or reschedule a booking, they should notify HanzVisuals as early as reasonably possible.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Any refund or transfer of a deposit will depend on the circumstances of the cancellation, notice provided, work already completed, expenses already incurred and HanzVisuals' ability to rebook the reserved date.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">If an event is postponed, HanzVisuals will make reasonable efforts to accommodate the new date, subject to availability.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">If HanzVisuals is unable to complete an agreed booking due to illness, emergency or circumstances outside reasonable control, HanzVisuals will work with the client to find an appropriate solution, which may include rescheduling, arranging alternative coverage where appropriate, or refunding amounts relating to services that cannot be provided.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Coverage and Creative Discretion").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">HanzVisuals will make reasonable efforts to provide professional coverage consistent with the portfolio and style shown to the client.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Photography and videography of live events are affected by factors including timing, venue restrictions, lighting, access, scheduling and the actions of participants. Unless specifically agreed in writing, HanzVisuals cannot guarantee that every person, player, moment or part of an event will be photographed or filmed.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">HanzVisuals retains reasonable creative discretion over shooting, image selection, editing, colour treatment and the final presentation of delivered work.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Delivery").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">The delivery method and, where applicable, expected turnaround will be communicated for each booking.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Any stated turnaround time is an estimate unless expressly agreed otherwise. HanzVisuals will make reasonable efforts to meet the expected delivery timeframe and will communicate significant unexpected delays where practical.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Final deliverables may be supplied through an online gallery, cloud storage, file-transfer service or another agreed delivery method.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Raw and Unedited Files").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Unless specifically agreed otherwise, RAW photographs, unedited video footage, project files and other working files are not included as part of the final deliverables.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Clients may request access to RAW, unedited or other working files; however, HanzVisuals is <span className="font-bold">not required to provide such material</span>, and any request will be considered at HanzVisuals' discretion. Additional fees or licensing conditions may apply where such material is provided.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">HanzVisuals is under no obligation to provide unused, rejected or otherwise undelivered material.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Copyright").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Unless otherwise expressly agreed in writing for a particular booking, HanzVisuals retains ownership of copyright in all photographs, videos and other copyright works created by HanzVisuals in connection with the booking.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">The client acknowledges and agrees that this provision constitutes an agreement to the contrary for the purposes of section 21(4) of the Copyright Act 1994, including where the client commissions and pays or agrees to pay for the creation of photographs or films.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">The client receives the rights to use the final delivered work under the licence set out in these terms rather than ownership of the underlying copyright.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Any transfer or assignment of copyright from HanzVisuals to the client must be expressly agreed in writing.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Standard Client License").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Unless a different licence is agreed in writing, HanzVisuals grants the client a non-exclusive, ongoing licence to use the final delivered photographs and videos for the client's own:</p>
            <ul className="mb-3 text-sm md:text-base md:leading-relaxed list-disc list-inside pl-5">
              <li>websites;</li>
              <li>organic social media;</li>
              <li>paid social media and digital advertising;</li>
              <li>internal communications;</li>
              <li>team, athlete, club, organisation, event, business, product or service promotion;</li>
              <li>digital and printed advertising or promotional material; and</li>
              <li>other ordinary promotional, marketing or commercial purposes directly connected with the client.</li>
            </ul>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">The client may share delivered content and/or private gallery access with individuals directly connected to the booking, such as athletes, team members, coaches, staff or parents/guardians, for their personal and non-commercial use. When sharing content with such individuals, HanzVisuals requests that the client encourage appropriate credit or tagging of HanzVisuals where reasonably practicable when the content is published or shared publicly.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Gallery links or access details must not be published or distributed publicly, or otherwise made openly accessible to persons not directly connected to the booking, without prior permission from HanzVisuals. Sharing access to a gallery does not grant any additional licensing or commercial usage rights.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">This licence does not transfer copyright ownership to the client.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Third Party Commercial User").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">The Standard Client Licence permits the client to use delivered content for its own advertising, marketing, promotion and other ordinary commercial purposes as described in Section 9.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Unless specifically agreed otherwise, the Standard Client Licence does not grant an unrelated third party, sponsor, business or commercial organisation the right to independently use HanzVisuals content for its own advertising, marketing, products, services or commercial campaigns.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">If a third party wishes to use delivered content independently for commercial purposes, they should contact HanzVisuals to arrange appropriate permission or licensing.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">A client's own advertising or promotional material may include sponsor names, tags, logos, acknowledgements or other branding where reasonably connected with the client's use of the content. This does not by itself grant that sponsor or third party independent usage rights to the content.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Delivered content may not be resold, sublicensed to unrelated third parties, incorporated into products or merchandise for sale, or otherwise commercially exploited by third parties outside the agreed purpose without prior written permission from HanzVisuals.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Editing and Alteration").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Reasonable resizing, cropping and formatting required for social media or other normal use is permitted.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">The client should not apply substantial edits, filters or alterations that materially misrepresent the final work or present altered work as an original HanzVisuals edit.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("HanzVisuals Portfolio and Promotional Use").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Unless otherwise agreed in writing, HanzVisuals may display work created during a booking in its portfolio, website, social media, promotional material, competition entries and other self-promotional uses.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Where privacy, confidentiality, embargoes or other restrictions apply to a project, these should be communicated and agreed upon before the booking.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Client Responsibilities").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">The client is responsible for providing accurate information relevant to the booking and for obtaining any permissions, venue access, accreditation or other authorisations that the client has agreed to arrange.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">HanzVisuals is not responsible for missed coverage resulting from restrictions, denied access, schedule changes or other circumstances outside its reasonable control.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("File Storage").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Clients are responsible for downloading and safely storing their delivered files.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">HanzVisuals may retain copies of completed work but does not guarantee permanent archival storage unless specifically agreed.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Liability").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">HanzVisuals will take reasonable care in providing its services and handling captured media.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">To the extent permitted by applicable law, HanzVisuals will not be responsible for losses caused by circumstances outside its reasonable control.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Nothing in these terms is intended to exclude, restrict or modify any rights or remedies that cannot lawfully be excluded under applicable New Zealand law.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Changes to These Terms").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Any job-specific agreement between HanzVisuals and the client may vary these Standard Terms. Where there is an inconsistency, the specifically agreed written terms for that booking will take priority.</p>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">HanzVisuals may update these Standard Terms from time to time. The version supplied or made available to the client when the relevant booking is confirmed will apply to that booking.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-phonk text-2xl md:text-4xl mb-5 md:px-20 text-center">{("Contact").toUpperCase()}</h2>
            <p className="mb-3 text-sm md:text-base md:leading-relaxed">Questions regarding a booking, copyright or licensing can be directed to HanzVisuals through the contact details provided with the applicable quote, invoice or booking correspondence.</p>
            <div className="flex flex-row w-full flex-wrap">
              <div className="flex flex-col w-full md:w-[50%]">
                <p className="text-sm md:text-base md:leading-relaxed font-bold">HanzVisuals</p>
                <p className="text-sm md:text-base md:leading-relaxed">Auckland, New Zealand</p>
              </div>
              <div className="flex flex-col w-full md:w-[50%]">
                <p className="text-sm md:text-base md:leading-relaxed font-bold">Email: <a href="mailto:hanzvisuals1@gmail.com" className="hover:underline font-normal text-neutral-200">hanzvisuals1@gmail.com</a></p>
                <p className="text-sm md:text-base md:leading-relaxed font-bold">Instagram: <a href="https://www.instagram.com/hanzvisuals_/" target="_blank" rel="noopener noreferrer" className="hover:underline font-normal text-neutral-200">@hanzvisuals_</a></p>
                <p className="text-sm md:text-base md:leading-relaxed font-bold">Website: <a href="https://www.hanzvisuals.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-normal text-neutral-200">hanzvisuals.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}