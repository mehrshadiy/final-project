import {Banner, Section} from "@/components";
import {FeatureCategories} from "@/components/pages/homePage";

export default function Home() {
    return (
        <>
            <Section>
                <Banner title={'miss amazing grocery deals'}
                        subtitle={'Sign up for the daily newsletter'}
                        bgImage={'/assets/images/banner_bg.png'}
                        image={'/assets/images/fresh-apples.png'}/>
            </Section>
            <Section>
                <div className="hidden sm:flex mb-[50px]">
                    <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
                </div>

                <FeatureCategories/>
            </Section>
        </>
    );
}
