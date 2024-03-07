import {Banner, Section} from "@/components";

export default function Home() {
  return (
    <>
        <Section >
            <Banner title={'miss amazing grocery deals'}
                    subtitle={'Sign up for the daily newsletter'}
                    bgImage={'/assets/images/banner_bg.png'}
                    image={'/assets/images/fresh-apples.png'}/>
        </Section>
    </>
  );
}
