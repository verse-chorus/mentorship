import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  const services = [
    {
      title: "Вкат в ML с нуля",
      description:
        "Пошаговое обучение: от теории к практике. Ключевые концепции + практика."
    },
    {
      title: "Адаптация на новом месте",
      description:
        "Помощь при старте в роли MLE/Researcher/MLOps. Как быстро влиться и показать результат."
    },
    {
      title: "Полезные материалы без воды",
      description:
        "Отбор только практичных ресурсов, без лишней теории."
    },
    {
      title: "Мок-собеседования",
      description:
        "Свежие вопросы с реальных собеседований, ML system design; Обратная связь и регулярные моки."
    },
    {
      title: "Резюме",
      description:
        "Как выделиться среди сотен кандидатов, обойти HR-фильтры и подать себя выгодно."
    },
    {
      title: "Как продавать себя дороже",
      description:
        "GitHub, переговоры, личный бренд, рост зарплаты."
    },
    {
      title: "Best-practices ML/Python/MLOps",
      description:
        "Пишем, как синьеры. CI/CD, мониторинг, логгирование, деплой"
    },
    {
      title: "Индивидуальные вопросы",
      description:
        "Ответы на любые карьерные и технические вопросы."
    }
  ];

  const pricing = [
    { label: "Предоплата", value: "30 000₽ (можно по частям)" },
    { label: "Вкат с нуля", value: "постоплата 150% от оффера (2–3 платежа)" },
    { label: "Повышение грейда", value: "постоплата 100% от оффера" },
    { label: "Консультации", value: "3000₽ / час" }
  ];
  
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Ментор по Machine Learning</h1>
        <p className="text-xl text-muted-foreground">
          Карьерные консультации, обучение, помощь в старте и росте в ML
        </p>
        <p className="text-xl text-muted-foreground">
        <strong>Индивидуальный подход</strong>. Первый созвон-знакомство FREE
        </p>
        <Button className="text-lg px-6 py-4" asChild>
          <a href="https://t.me/versechorus" target="_blank">
            Написать в Telegram
          </a>
        </Button>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="rounded-2xl shadow-md h-full">
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Стоимость</h2>
        <ul className="space-y-2">
          {pricing.map((p, idx) => (
            <li key={idx} className="text-base">
              <strong>{p.label}:</strong> {p.value}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-center pt-10">
      <img 
        src="/images/f.jpg" 
        alt="Моя фотография" 
        className="w-40 h-55 rounded-full mx-auto mb-6"  // Стили для фото
      />
        <p className="text-muted-foreground text-sm">
          Senior ML-инженер, VisionLabs
        </p>
        <p className="text-muted-foreground text-sm">
          Telegram: <a href="https://t.me/yourtelegram" className="underline">@versechorus</a>
        </p>
        <p className="text-muted-foreground text-sm">
          Методичка: <a href="https://github.com/verse-chorus/mentorship/blob/main/teormin/math_teormin.pdf" className="underline">Перейти</a>
        </p>
        <p className="text-muted-foreground text-sm">
          RoadMap: <a href="https://github.com/verse-chorus/mentorship/blob/main/roadmap/rm.pdf" className="underline">Перейти</a>
        </p>
        
      </section>
      </main>
  );
}