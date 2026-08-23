import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const GITHUB_URL = "https://github.com/markejin";

const WANT_TO_BUILD = [
  {
    title: "덜 피곤한 SNS",
    body: "광고와 수익화가 앞에 서지 않는 곳. 사진과 메모를 부담 없이 남길 수 있고, 남긴 기록이 남에게 보여주기 위한 것이 아니라 나에게 쌓이는 자리를 생각하고 있습니다.",
    tilt: "-rotate-1",
  },
  {
    title: "본업 자동화 업무툴",
    body: "프로모션 기획, 상품 판매 분석처럼 꼭 해야 하지만 번거로운 일부터 손대보고 싶습니다.",
    tilt: "rotate-1",
  },
];

const INTERESTS = [
  "F&B",
  "업무툴",
  "SNS",
  "기록",
  "브랜드 기획",
  "운영",
  "마케팅",
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* 히어로 */}
      <section className="mx-auto w-full max-w-3xl px-6 pt-20 pb-16 md:pt-32 md:pb-28">
        <Reveal>
          <div className="flex items-center gap-4">
            <span
              aria-hidden
              className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary font-hand text-2xl text-primary-foreground md:size-16 md:text-3xl"
            >
              혜진
            </span>
            <p className="font-hand text-2xl text-muted-foreground md:text-3xl">
              안녕하세요,
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            박혜진
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
            F&B에서 브랜드 기획/운영/마케팅 일을 하고 있으며, 덜 피곤한 기록터를 만들어 보고 싶습니다.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 font-hand text-3xl text-primary md:text-4xl">
            — 혜진
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contact">연락하기</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      <Separator className="mx-auto max-w-3xl" />

      {/* 소개 */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16 md:py-28">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            소개
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 space-y-5 text-base leading-8 md:text-lg md:leading-9">
            <p>
              10년 동안 F&amp;B 브랜드를 기획하고, 운영하고, 알리는 일을
              해왔습니다.
            </p>
            <p>
              사진을 찍고 메모를 남기는 일을 좋아합니다. 다만 요즘의 인스타그램과
              블로그는 광고와 수익화가 앞에 서 있어서, 기록을 남기는 일이 어느새
              피로한 일이 되어버렸습니다.
            </p>
            <p>
              그래서 덜 피곤하게 기록할 수 있는 자리를 찾고 있습니다. 마땅한 곳이
              없다면 직접 만들어 보려고 합니다.
            </p>
          </div>
        </Reveal>
      </section>

      <Separator className="mx-auto max-w-3xl" />

      {/* 만들고 싶은 것 */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              만들고 싶은 것
            </h2>
            <span className="inline-block rotate-2 rounded-sm bg-postit px-4 py-2 font-hand text-2xl text-foreground shadow-sm">
              아직 아이템은 없지만
            </span>
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          {WANT_TO_BUILD.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <Card
                className={`${item.tilt} transition-transform duration-300 hover:rotate-0`}
              >
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-8 text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl" />

      {/* 관심사 */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16 md:py-28">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            관심사
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-3">
            {INTERESTS.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-4 py-2 text-base"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </Reveal>
      </section>

      <Separator className="mx-auto max-w-3xl" />

      {/* 연락 */}
      <section
        id="contact"
        className="mx-auto w-full max-w-3xl scroll-mt-16 px-6 py-16 md:py-28"
      >
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            연락
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
            만들고 싶은 것이 비슷하거나, 같이 해보고 싶은 일이 있다면 편하게
            연락 주세요.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                GitHub — markejin
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 font-hand text-2xl text-muted-foreground md:text-3xl">
            읽어주셔서 고맙습니다.
          </p>
        </Reveal>
      </section>

      {/* 푸터 */}
      <footer className="mx-auto w-full max-w-3xl px-6 pb-16">
        <Separator />
        <div className="flex flex-wrap items-center justify-between gap-2 pt-8 text-sm text-muted-foreground">
          <p>박혜진 · 2026</p>
          <p>Built with Claude Code</p>
        </div>
      </footer>
    </main>
  );
}
