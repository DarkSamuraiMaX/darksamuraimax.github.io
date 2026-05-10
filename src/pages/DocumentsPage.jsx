import { useMemo, useState } from "react";
import PageBackground from "../layouts/PageBackground";
import FrameLayout from "../components/FrameLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

export default function DocumentsPage() {
  const { t } = useLanguage();

  // ------------------------------------
  // Документы (БЕЗ t)
  // ------------------------------------
  const DOCUMENTS = [
    {
      id: 1,
      titleKey: "text_documents_1_name",
      descKey: "text_documents_1_desc",
      categoryKey: "text_documents_category_article",
      type: "doc",
      lang: "RU",
      url: "https://docs.google.com/document/d/1Y0Oh9BIcF9NSr_6YmS6qrN4h0TMT9n1iCgAzCnmIlzw/",
    },
    {
      id: 2,
      titleKey: "text_documents_2_name",
      descKey: "text_documents_2_desc",
      categoryKey: "text_documents_category_designdoc",
      type: "doc",
      lang: "RU",
      url: "https://docs.google.com/document/d/1jEPXhhCr12gqrlc6Q6C-J0UNrCj1e6KcDfpEe4LUso8/",
    },
    {
      id: 3,
      titleKey: "text_documents_3_name",
      descKey: "text_documents_3_desc",
      categoryKey: "text_documents_category_designdoc",
      type: "ppt",
      lang: "RU",
      url: "https://docs.google.com/presentation/d/1feaYKSBTs9dKgTBoq5iyok0bSklPPg-XXObt9C88Efw/",
    },
    {
      id: 4,
      titleKey: "text_documents_4_name",
      descKey: "text_documents_4_desc",
      categoryKey: "text_documents_category_table",
      type: "xls",
      lang: "RU",
      url: "https://docs.google.com/spreadsheets/d/1GOQKay6q-Ta31SpZVIAGbFjd1ooD00yBTepwV27xtFw/",
    },
    {
      id: 5,
      titleKey: "text_documents_5_name",
      descKey: "text_documents_5_desc",
      categoryKey: "text_documents_category_designdoc",
      type: "doc",
      lang: "EN",
      url: "https://docs.google.com/document/d/13HD6kUAc70nPisIdN9wB3j_raYh2VkzHn9RoPqqYGaI/",
    },
  ];

  const TYPE_ICON = {
    doc: "📄",
    xls: "📊",
    ppt: "📈",
  };

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // ------------------------------------
  // Категории
  // ------------------------------------
  const categories = ["all", ...new Set(DOCUMENTS.map(d => d.categoryKey))];

  // ------------------------------------
  // Фильтрация
  // ------------------------------------
  const filteredDocuments = useMemo(() => {
    return DOCUMENTS.filter((doc) => {
      const title = t(doc.titleKey).toLowerCase();

      const matchesSearch = title.includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || doc.categoryKey === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category, t]);

  return (
    <PageBackground>
      <div className="w-full max-w-6xl mx-auto">
        <FrameLayout>
          <div className="px-6 sm:px-8 lg:px-10 min-h-[calc(100dvh-228px)]"> {/* тут костыльный дотяг страницы до низа экрана */}
            <Header />

            <section className="mt-8">
              <h1 className="text-4xl font-bold text-center">
                {t("text_title_documents")}
              </h1>
              <br />
            </section>

            {/* Фильтры */}
            <section className="mt-6 flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder={t("text_documents_search_empty")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full sm:flex-1
                  bg-black/40
                  border border-white/10
                  rounded-lg
                  px-4 py-2
                  text-sm
                  focus:outline-none focus:ring-1 focus:ring-white/30
                "
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  w-full sm:w-60
                  bg-black/40
                  border border-white/10
                  rounded-lg
                  px-4 py-2
                  text-sm
                  focus:outline-none focus:ring-1 focus:ring-white/30
                "
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all"
                      ? t("text_documents_search_all")
                      : t(cat)}
                  </option>
                ))}
              </select>
            </section>

            {/* Список */}
            <section className="mt-8 space-y-2">
              {filteredDocuments.length === 0 && (
                <div className="text-sm text-gray-400">
                  {t("text_documents_search_noresults")}
                </div>
              )}

              {filteredDocuments.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-start gap-4
                    w-full
                    bg-black/30
                    border border-white/10
                    rounded-lg
                    px-4 py-3
                    hover:bg-black/40
                    hover:border-white/20
                    transition
                    focus:outline-none
                    focus:ring-1
                    focus:ring-white/30
                  "
                >
                  <div className="text-2xl leading-none mt-1">
                    {TYPE_ICON[doc.type] || "📁"}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">
                      {t(doc.titleKey)}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {t(doc.descKey)}
                    </div>
                  </div>

                  <div className="text-right whitespace-nowrap mt-1">
                    <div className="text-xs text-gray-300">
                      {t(doc.categoryKey)}
                    </div>
                    <div className="text-[10px] text-gray-500 mt-2">
                      {doc.lang}
                    </div>
                  </div>
                </a>
              ))}
            </section>

            <div className="h-12" />
          </div>
          <Footer />
        </FrameLayout>
      </div>
    </PageBackground>
  );
}