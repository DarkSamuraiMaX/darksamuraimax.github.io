import PageBackground from "../layouts/PageBackground";
import FrameLayout from "../components/FrameLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

export default function AboutPage() {
const { t } = useLanguage();  
  return (
    <PageBackground>
      <div className="w-full max-w-6xl mx-auto">
        <FrameLayout>
          <div className="px-6 sm:px-8 lg:px-10">
            <Header />

            <main className="text-white space-y-16">
              {/* ---------- НАЧАЛО ---------- */}
                <h1 className="text-4xl font-bold text-center mt-8">{t("text_title_about")}</h1>
               <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
				<img
				src="/images/about1.jpg"
				alt="Maxim DarkSamurai Ostanin game designer photo"
				className="select-none w-full rounded-lg"
				draggable="false"
				/>

                  <p>
                    {t("text_about_start_1")}
					<br />
					<br />
                    {t("text_about_start_2")}
                  </p>
              </section>


              {/* ---------- ИСТОРИЯ ---------- */}
			  <div className="space-y-6">
			   <h2 className="text-2xl font-semibold">{t("text_about_history_title")}</h2>
              <section className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
                  <p>
                    {t("text_about_history_text_1")}
					<br />
					<br />
                    {t("text_about_history_text_2")}
                  </p>
				<figure className="w-full bg-black/40 rounded-xl p-2">
				<img
				src="/images/about2.jpg"
				alt="Maxim DarkSamurai Ostanin game designer collection"
				className="select-none w-full rounded-lg"
				draggable="false"
				/>

				<figcaption className="mt-2 text-sm italic text-gray-400 text-center">
				{t("text_about_history_pictext")}
				</figcaption>
				</figure>

              </section>
			  </div>
			  
              {/* ---------- РАБОТЫ ---------- */}
              <section>
                <div className="space-y-4 order-2 md:order-1">
                  <h2 className="text-2xl font-semibold">{t("text_about_work_title")}</h2>
				<br />
				<img
				src="/images/sgf.jpg"
				alt="Game Forest logo"
				className="mx-auto select-none rounded-xl"
				draggable="false"
				/>
                  <p>
                    {t("text_about_work_text_1")}
                  </p>
				<br />
				<img
				src="/images/pika.jpg"
				alt="Pika Games logo"
				className="mx-auto select-none rounded-xl"
				draggable="false"
				/>
                  <p>
                    {t("text_about_work_text_2")}
                  </p>
				<br />
				<img
				src="/images/dvfu.jpg"
				alt="FEFU logo"
				className="mx-auto select-none rounded-xl"
				draggable="false"
				/>
                  <p>
                    {t("text_about_work_text_3")}
                  </p>
				<br />
				<img
				src="/images/saber.jpg"
				alt="Saber Interactive logo"
				className="mx-auto select-none rounded-xl"
				draggable="false"
				/>
                  <p>
                    {t("text_about_work_text_4")}
                  </p>
				<br />
				<img
				src="/images/igm.jpg"
				alt="IGM logo"
				className="mx-auto select-none rounded-xl"
				draggable="false"
				/>
                  <p>
                    {t("text_about_work_text_5")}
                  </p>
				<br />
				<img
				src="/images/maff.jpg"
				alt="maff.io logo"
				className="mx-auto select-none rounded-xl"
				draggable="false"
				/>
                  <p>
                    {t("text_about_work_text_6")}
                  </p>
                </div>
              </section>			  

              {/* ---------- ВКУСЫ ---------- */}
              <section className="grid md:grid-cols-[2fr_1.5fr] gap-8 items-start">
                <div className="space-y-6 order-2 md:order-1">
                  <h2 className="text-2xl font-semibold">{t("text_about_favgames_title")}</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>{t("text_about_favgames_text_1")}</li>
                    <li>{t("text_about_favgames_text_2")}</li>
                    <li>{t("text_about_favgames_text_3")}</li> 
                    <li>{t("text_about_favgames_text_4")}</li>
					<li>{t("text_about_favgames_text_5")}</li>
					<li>{t("text_about_favgames_text_6")}</li>
					<li>{t("text_about_favgames_text_7")}</li>
					<li>{t("text_about_favgames_text_8")}</li>
					<br />
					{t("text_about_favgames_text_ending")}
                  </ul>
                </div>

                <div className="w-full bg-black/40 p-2 order-1 md:order-2">
				<img
				src="/images/about3.jpg"
				alt="Maxim DarkSamurai Ostanin game designer preferences"
				className="select-none"
				draggable="false"
				/>
                </div>
              </section>

              {/* ---------- ПОДХОДЫ ---------- */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">{t("text_about_design_title")}</h2>

                  <div className="flex items-center justify-center text-gray-400">
				<img
				src="/images/about4.jpg"
				alt="game designer meme"
				className="select-none"
				draggable="false"
				/>
                </div>

                <ul className="space-y-2 text-gray-300 max-w-4xl">
				  <li>{t("text_about_design_text_1")}</li>
                  <li>{t("text_about_design_text_2")}</li>
                  <li>{t("text_about_design_text_3")}</li>
                </ul>
              </section>

              {/* ---------- ТРИВИА ---------- */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">{t("text_about_trivia_title")}</h2>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center justify-center text-gray-400">
				<img
				src="/images/about5.jpg"
				alt="Iron Games logo Maxim DarkSamurai Ostanin"
				className="select-none w-full rounded-lg"
				draggable="false"
				/>
                  </div>
                  <div className="flex items-center justify-center text-gray-400">
				<img
				src="/images/about6.jpg"
				alt="Katana Jam IV logo"
				className="select-none w-full rounded-lg"
				draggable="false"
				/>
                  </div>
                  <div className="flex items-center justify-center text-gray-400">
				<img
				src="/images/about7.jpg"
				alt="Maxim DarkSamurai Ostanin game designer collection"
				className="select-none w-full rounded-lg"
				draggable="false"
				/>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>{t("text_about_trivia_text_1")}</li>
                  <li>{t("text_about_trivia_text_2")}</li>
				  <li>{t("text_about_trivia_text_3")}</li>
				  <li>{t("text_about_trivia_text_4")}</li>
                  <li>{t("text_about_trivia_text_5")}</li>
                  <li>{t("text_about_trivia_text_6")}</li>
				  <li>{t("text_about_trivia_text_7")}</li>
				  <li>{t("text_about_trivia_text_8")}</li>
				  <li>{t("text_about_trivia_text_9")}</li>
				  <li>{t("text_about_trivia_text_10")}</li>
                </ul>
              </section>

              {/* ---------- ЦЕЛИ ---------- */}
			  <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{t("text_about_goal_title")}</h2>
              <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
				<figure className="w-full bg-black/40 rounded-xl p-2">
				<img
				src="/images/about8.jpg"
				alt="Maxim DarkSamurai Ostanin game designer photo"
				className="select-none w-full rounded-lg"
				draggable="false"
				/>

				<figcaption className="mt-2 text-sm italic text-gray-400 text-center">
				{t("text_about_goal_pictext")}
				</figcaption>
				</figure>

                  <p>
                    {t("text_about_goal_text_1")}
                  </p>
              </section>
			  </div>

              {/* ---------- КОНТАКТЫ ---------- */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">{t("text_about_contacts_title")}</h2>

                <p className="max-w-3xl text-gray-300">
                  {t("text_about_contacts_text_1")}
                </p>

                <ul className="space-y-1 text-gray-300">
                  <li>{t("text_about_contacts_text_2")} <a href="mailto:darksamurai.max@gmail.com" className="font-medium text-fg-brand underline hover:no-underline">darksamurai.max@gmail.com</a></li>
                  <li>{t("text_about_contacts_text_3")} <a href="https://t.me/DarkSamurai" className="font-medium text-fg-brand underline hover:no-underline" target="_blank" rel="noopener noreferrer">@DarkSamurai</a></li>
                  <li>{t("text_about_contacts_text_4")} <a href="https://www.linkedin.com/in/maxim-ostanin/" className="font-medium text-fg-brand underline hover:no-underline" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/maxim-ostanin/</a></li>
                </ul>
              </section>
            </main>
			<br />
            <Footer />
        </div>			
       </FrameLayout>
      </div>
    </PageBackground>
  );
}
