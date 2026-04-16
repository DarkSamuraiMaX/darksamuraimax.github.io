import Header from "../components/Header";
import Footer from "../components/Footer";
import FrameLayout from "../components/FrameLayout";
import PageBackground from "../layouts/PageBackground";
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function GamesPage() {

 const { t } = useLanguage();

// ==== ДАННЫЕ СТРАНИЦЫ ====
  const commercialProjects = [
    {
	slug: "nda",
      title: t("text_games_commercial_3_name"),
      description:
        t("text_games_commercial_3_desc"),
      image: "/images/ndagoddamnit.jpg",
      screenshots: [
        "/images/nda1.jpg",
        "/images/nda2.jpg",
        "/images/nda3.jpg",
		"/images/nda4.jpg",
		"/images/nda5.jpg",
		"/images/nda6.jpg",
		"/images/nda7.jpg",
		"/images/nda8.jpg",
		"/images/nda9.jpg",
		"/images/nda10.jpg",
      ],
      extraText:
        t("text_games_commercial_3_extra"),
	  extraLinks: [
		{ label: t("text_games_commercial_3_link_1") },
		{ label: t("text_games_commercial_3_link_2") },
		{ label: t("text_games_commercial_3_link_3") },
		{ label: t("text_games_commercial_3_link_4")},
		],
    },
    {
      title: t("text_games_commercial_2_name"),
      description: t("text_games_commercial_2_desc"),
      image: "/images/toystorydrop.jpg",
      screenshots: [
        "/images/tsd1.jpg",
        "/images/tsd2.jpg",
		"/images/tsd3.jpg",
		"/images/tsd4.jpg",
		"/images/tsd5.jpg",
		"/images/tsd6.jpg",
		"/images/tsd7.jpg",
		"/images/tsd8.jpg",
		"/images/tsd9.jpg",
		"/images/tsd10.jpg",
      ],
      extraText:
        t("text_games_commercial_2_extra"),
	  extraLinks: [
	  	{ label: t("text_games_commercial_2_link_1"), url: "https://drive.google.com/file/d/1OVc79B42rFSBNQe6xHQ2bobZefc8GxQG/view?usp=sharing" },
		{ label: t("text_games_commercial_2_link_2"), url: "https://www.youtube.com/watch?v=Z_L34Oe5tko" },
		{ label: t("text_games_commercial_2_link_3"), url: "https://www.youtube.com/watch?v=1U_peJQhcAc" },
		{ label: t("text_games_commercial_2_link_4"), url: "https://disney.fandom.com/wiki/Toy_Story_Drop!" },
		{ label: t("text_games_commercial_2_link_5"), url: "https://www.youtube.com/watch?v=6-3meYj4Wcs" },
		],
    },
	    {
      title: t("text_games_commercial_1_name"),
      description: t("text_games_commercial_1_desc"),
      image: "/images/pikanonogram.jpg",
      screenshots: [
        "/images/pika1.jpg",
        "/images/pika2.jpg",
		"/images/pika3.jpg",
		"/images/pika4.jpg",
		"/images/pika5.jpg",
		"/images/pika6.jpg",
		"/images/pika7.jpg",
		"/images/pika8.jpg",
		"/images/pika9.jpg",
		"/images/pika10.jpg",
      ],
      extraText:
        t("text_games_commercial_1_extra"),
	  extraLinks: [
	  	{ label: t("text_games_commercial_1_link_1"), url: "https://drive.google.com/file/d/1BDI8tueXdo09YLCspR5R39f2IXKqu0SB/view?usp=sharing" },
		],
    },
  ];

  const nonCommercialProjects = [
    {
      title: t("text_games_noncommercial_13_name"),
      description: t("text_games_noncommercial_13_desc"),
      image: "/images/invisible.jpg",
      screenshots: [
        "/images/invisible1.jpg",
        "/images/invisible2.jpg",
		"/images/invisible3.jpg",
		"/images/invisible4.jpg",
		"/images/invisible5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_13_extra"),
			  extraLinks: [
		{ label: t("text_games_noncommercial_13_link_1"), url: "https://drive.google.com/file/d/1FC8EVa73Eb0pa9JIsT9tO5GM1TZRycOM/view?usp=sharing" },
		{ label: t("text_games_noncommercial_13_link_2"), url: "https://itch.io/jam/anthology-jam-2026/rate/4451230" },
		],
    },
    {
      title: t("text_games_noncommercial_12_name"),
      description: t("text_games_noncommercial_12_desc"),
      image: "/images/carpetracer.jpg",
      screenshots: [
        "/images/carpetracer1.jpg",
        "/images/carpetracer2.jpg",
		"/images/carpetracer3.jpg",
		"/images/carpetracer4.jpg",
		"/images/carpetracer5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_12_extra"),
			  extraLinks: [
		{ label: t("text_games_noncommercial_12_link_1"), url: "https://drive.google.com/file/d/1r5Un6I1qAG2UIarGr8h8Z4qt47tQYzqx/view?usp=sharing" },
		{ label: t("text_games_noncommercial_12_link_2"), url: "https://itch.io/jam/gamedevtv-jam-2025/rate/3592708" },
		],
    },
    {
      title: t("text_games_noncommercial_11_name"),
      description: t("text_games_noncommercial_11_desc"),
      image: "/images/synergy.jpg",
      screenshots: [
        "/images/synergy1.jpg",
        "/images/synergy2.jpg",
		"/images/synergy3.jpg",
		"/images/synergy4.jpg",
		"/images/synergy5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_11_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_11_link_1"), url: "https://drive.google.com/file/d/12IfG-XdxQJV0xzTeK7orbz4Hd4jXTiqF/view?usp=sharing" },
		{ label: t("text_games_noncommercial_11_link_2"), url: "https://itch.io/jam/katana-jam-ii/rate/1800512" },
		],
    },
	    {
      title: t("text_games_noncommercial_10_name"),
      description: t("text_games_noncommercial_10_desc"),
      image: "/images/furydices.jpg",
      screenshots: [
        "/images/furydices1.jpg",
        "/images/furydices2.jpg",
		"/images/furydices3.jpg",
		"/images/furydices4.jpg",
		"/images/furydices5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_10_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_10_link_1"), url: "https://drive.google.com/file/d/1qpSXlqVRvIArBu0lknHKQirBQftaexDv/view?usp=sharing" },
		{ label: t("text_games_noncommercial_10_link_2"), url: "https://itch.io/jam/gmtk-jam-2022/rate/1621992" },
		],
    },
	    {
      title: t("text_games_noncommercial_9_name"),
      description: t("text_games_noncommercial_9_desc"),
      image: "/images/keshasgrillhouse.jpg",
      screenshots: [
        "/images/keshasgrillhouse1.jpg",
        "/images/keshasgrillhouse2.jpg",
		"/images/keshasgrillhouse3.jpg",
		"/images/keshasgrillhouse4.jpg",
		"/images/keshasgrillhouse5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_9_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_9_link_1"), url: "https://drive.google.com/file/d/1yhSDMAWWpp_5xqnlk4Y3EYAqRYEvUWMW/view?usp=sharing" },
		{ label: t("text_games_noncommercial_9_link_2"), url: "https://darksamuraimax.itch.io/keshas-grillhouse" },
		],
    },
	    {
      title: t("text_games_noncommercial_8_name"),
      description: t("text_games_noncommercial_8_desc"),
      image: "/images/mergingfluids.jpg",
      screenshots: [
        "/images/mergingfluids1.jpg",
        "/images/mergingfluids2.jpg",
		"/images/mergingfluids3.jpg",
		"/images/mergingfluids4.jpg",
		"/images/mergingfluids5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_8_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_8_link_1"), url: "https://drive.google.com/file/d/1NxyXK4x6OMTNEpRXjVnEUc2L_S5nLnwg/view?usp=sharing" },
		{ label: t("text_games_noncommercial_8_link_2"), url: "https://itch.io/jam/gmtk-2021/rate/1085071" },
		],
    },
	    {
      title: t("text_games_noncommercial_7_name"),
      description: t("text_games_noncommercial_7_desc"),
      image: "/images/wintermishap.jpg",
      screenshots: [
        "/images/wintermishap1.jpg",
        "/images/wintermishap2.jpg",
		"/images/wintermishap3.jpg",
		"/images/wintermishap4.jpg",
		"/images/wintermishap5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_7_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_7_link_1"), url: "https://drive.google.com/file/d/1wUk0JerubavtFBW-N6XP-ztf3phRju1y/view?usp=sharing" },
		{ label: t("text_games_noncommercial_7_link_2"), url: "https://itch.io/jam/-winterjam2020/rate/853879" },
		{ label: t("text_games_noncommercial_7_link_3"), url: "https://www.youtube.com/watch?v=DFU7T8p2j_o" },
		{ label: t("text_games_noncommercial_7_link_4"), url: "https://www.youtube.com/watch?v=ConHkh3O7mE" },
		],
    },
	    {
      title: t("text_games_noncommercial_6_name"),
      description: t("text_games_noncommercial_6_desc"),
      image: "/images/hardworker.jpg",
      screenshots: [
        "/images/hardworker1.jpg",
        "/images/hardworker2.jpg",
		"/images/hardworker3.jpg",
		"/images/hardworker4.jpg",
		"/images/hardworker5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_6_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_6_link_1"), url: "https://drive.google.com/file/d/1OFX5uLesvSejBG4n0gPWwqMadtpNSSi6/view?usp=sharing" },
		{ label: t("text_games_noncommercial_6_link_2"), url: "https://itch.io/jam/ludum-dare-47-indikator/rate/777003" },
		{ label: t("text_games_noncommercial_6_link_3"), url: "https://www.youtube.com/watch?v=pVNmlrj9Bk4" },
		],
    },
	    {
      title: t("text_games_noncommercial_5_name"),
      description: t("text_games_noncommercial_5_desc"),
      image: "/images/frabbits.jpg",
      screenshots: [
        "/images/frabbits1.jpg",
        "/images/frabbits2.jpg",
		"/images/frabbits3.jpg",
		"/images/frabbits4.jpg",
		"/images/frabbits5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_5_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_5_link_1"), url: "https://drive.google.com/file/d/1AUCWQ8bjs4uTxvvdLwV77PuPwxgT0xTN/view?usp=sharing" },
		{ label: t("text_games_noncommercial_5_link_2"), url: "https://itch.io/jam/gmtk-2020/rate/697890" },
		],
    },
	    {
      title: t("text_games_noncommercial_4_name"),
      description: t("text_games_noncommercial_4_desc"),
      image: "/images/restory.jpg",
      screenshots: [
        "/images/restory1.jpg",
        "/images/restory2.jpg",
		"/images/restory3.jpg",
		"/images/restory4.jpg",
		"/images/restory5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_4_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_4_link_1"), url: "https://drive.google.com/file/d/1TmS4-NmD57AfiBNiDWZdTSYSEmw_1e8X/view?usp=sharing" },
		{ label: t("text_games_noncommercial_4_link_2"), url: "https://forum.gamemaker.io/index.php?threads/gmc-jam-37-games-topic-enter-here.75650/#post-448379" },
		],
    },
	    {
      title: t("text_games_noncommercial_3_name"),
      description: t("text_games_noncommercial_3_desc"),
      image: "/images/zatopeelo.jpg",
      screenshots: [
        "/images/zatopeelo1.jpg",
        "/images/zatopeelo2.jpg",
		"/images/zatopeelo3.jpg",
		"/images/zatopeelo4.jpg",
		"/images/zatopeelo5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_3_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_3_link_1"), url: "https://drive.google.com/file/d/1TvPaGd7UxoWHpErVWaxRYilaOpYMPkkb/view?usp=sharing" },
		],
    },
	    {
      title: t("text_games_noncommercial_2_name"),
      description: t("text_games_noncommercial_2_desc"),
      image: "/images/bantimesimulator.jpg",
      screenshots: [
        "/images/bantimesimulator1.jpg",
        "/images/bantimesimulator2.jpg",
		"/images/bantimesimulator3.jpg",
		"/images/bantimesimulator4.jpg",
		"/images/bantimesimulator5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_2_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_2_link_1"), url: "https://drive.google.com/file/d/1mkFAU6liwdZXKWjcg5XVo2Qshp3zEchz/view?usp=sharing" },
		{ label: t("text_games_noncommercial_2_link_2"), url: "https://gamejolt.com/games/BTS/267863" },
		],
    },
	    {
      title: t("text_games_noncommercial_1_name"),
      description: t("text_games_noncommercial_1_desc"),
      image: "/images/ncyclopedia.jpg",
      screenshots: [
        "/images/ncyclopedia1.jpg",
        "/images/ncyclopedia2.jpg",
		"/images/ncyclopedia3.jpg",
		"/images/ncyclopedia4.jpg",
		"/images/ncyclopedia5.jpg",
      ],
      extraText:
        t("text_games_noncommercial_1_extra"),
	  extraLinks: [
		{ label: t("text_games_noncommercial_1_link_1"), url: "https://drive.google.com/file/d/149hksfeengw6i_VElcbvtFStIspETknL/view?usp=sharing" },
		{ label: t("text_games_noncommercial_1_link_2"), url: "https://vk.com/wall-55761651_7863" },
		],
    },
  ];

const [secretMode, setSecretMode] = useState(false);

useEffect(() => {
  const konami = [
    "ArrowUp","ArrowUp",
    "ArrowDown","ArrowDown",
    "ArrowLeft","ArrowRight",
    "ArrowLeft","ArrowRight",
    "b","a"
  ];

  let position = 0;

  const onKeyDown = (event) => {
    const key = event.key;

    if (key === konami[position]) {
      position++;

      if (position === konami.length) {
        setSecretMode(prev => !prev); 
        position = 0; 
      }
    } else {
      position = 0;
    }
  };

  window.addEventListener("keydown", onKeyDown);
  return () => window.removeEventListener("keydown", onKeyDown);
}, []);

const processedCommercialProjects = commercialProjects.map((project) => {
  if (project.slug === "nda" && secretMode) {
    return {
      ...project,
      title: t("text_games_commercial_0_name"),
      description:
        t("text_games_commercial_0_desc"),
      image: "/images/wh40ksm2.jpg",
      screenshots: [
        "/images/waha1.jpg",
        "/images/waha2.jpg",
        "/images/waha3.jpg",
		"/images/waha4.jpg",
		"/images/waha5.jpg",
		"/images/waha6.jpg",
		"/images/waha7.jpg",
		"/images/waha8.jpg",
		"/images/waha9.jpg",
		"/images/waha10.jpg",
      ],
      extraText:
        t("text_games_commercial_0_extra"),
	  extraLinks: [
		{ label: t("text_games_commercial_0_link_1"), url: "https://www.youtube.com/watch?v=mJntSVa4OBE" },
		{ label: t("text_games_commercial_0_link_2"), url: "http://youtube.com/watch?v=Lu2t6jyrjdg&list=PLA9eDv4GHfSCe9T3bp-ll11sbQ4eqv__f" },
		{ label: t("text_games_commercial_0_link_3"), url: "https://en.wikipedia.org/wiki/Warhammer_40,000:_Space_Marine_2" },
		{ label: t("text_games_commercial_0_link_4"), url: "https://community.focus-entmt.com/focus-entertainment/space-marine-2/blogs" },
		],
    };
  }

  return project;
});

  const ProjectBlock = ({ project }) => {
    const [big, setBig] = useState(project.screenshots[0]);


    return (
      <div className="py-5">
        {/* Основной блок */}
        <div className="flex flex-col md:flex-row gap-8 bg-black/40 p-6 rounded-xl backdrop-blur-md shadow-lg">
          {/* Текст */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-300 whitespace-pre-line">{project.description}</p>
          </div>

          {/* Основной скрин */}
          <div className="flex-1">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl shadow-lg max-h-72 object-cover mx-auto"
            />
          </div>
        </div>

        {/* Дополнительный текст */}
        <p className="text-gray-300 mt-6 mb-6 whitespace-pre-line">{project.extraText}</p>

        {/* Галерея */}
<div>
  <h4 className="text-xl font-semibold mb-4">{t("text_games_gallery")}</h4>

  <div className="flex justify-center">
    <img
      src={big}
	  alt={`${project.title} screenshot`}
      className="max-h-[400px] object-cover rounded-xl shadow-lg mb-3"
    />
  </div>

  <div className="flex justify-center">
    <div className="gallery-scroll flex gap-4 overflow-x-auto py-2">
      {project.screenshots.map((shot, i) => (
        <img
          key={i}
          src={shot}
		  alt={`${project.title} screenshot`}
          onClick={() => setBig(shot)}
          className={`h-20 rounded-lg cursor-pointer transition ${
            shot === big
              ? "ring-2 ring-yellow-400"
              : "opacity-70 hover:opacity-100"
          }`}
        />
      ))}
    </div>
  </div>
</div>
		
		{/* Дополнительные ссылки */}
		{project.extraLinks && project.extraLinks.length > 0 && (
			<div className="mt-6">
			<h4 className="text-xl font-semibold mb-2">{t("text_games_links")}</h4>

			<ul className="space-y-1">
			{project.extraLinks.map((link, index) => (
				<li key={index}>
					<a
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-indigo-400 hover:text-indigo-200 transition underline"
					>
					{link.label}
					</a>
				</li>
				))}
			</ul>
			</div>
		)}

        {/* Разделитель */}
        <div className="mt-12 mb-4 w-full">
          <div className="mx-auto h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        </div>
      </div>
    );
  };

return (
  <PageBackground>
    <div className="w-full max-w-6xl mx-auto">
      <FrameLayout>
		<div className="px-6 sm:px-8 lg:px-10">
        <Header />

        <main className="text-white space-y-16">

          {/* Заголовок */}
          <h1 className="text-4xl font-bold text-center mt-8">{t("text_title_games")}</h1>

          {/* Коммерческие */}
          <section>
            <h2 className="text-3xl font-bold mb-6">{t("text_games_commercial_title")}</h2>
            {processedCommercialProjects.map((p, i) => (
              <ProjectBlock key={i} project={p} />
            ))}
          </section>

          {/* Некоммерческие */}
          <section>
            <h2 className="text-3xl font-bold mb-6">{t("text_games_noncommercial_title")}</h2>
            {nonCommercialProjects.map((p, i) => (
              <ProjectBlock key={i} project={p} />
            ))}
          </section>
        </main>

        <Footer />
 </div>
      </FrameLayout>
    </div>
  </PageBackground>
);
}