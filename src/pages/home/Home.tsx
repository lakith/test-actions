import styled from 'styled-components';
import CategoryButton from "../../components/categoryButton/CategoryButton.tsx";
import BackButtonComponent from "../../components/BackButton/BackButton.tsx";
import CardWidget from '../../components/CardWidget/CardWidget.tsx';
import DotWidget from '../../components/DotWidget/DotWidget.tsx';
import React, { useEffect, useState } from 'react';
import { useGetOffersQuery } from '../../services/apiSlice.ts';
import { useNavigate } from 'react-router';

interface MerchantData {
    id: string;
    image: string;
    name: string;
    category: {
        name: string;
    };
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9fafb;
    max-width: 100%;
`;

// const HeaderLine = styled.div`
//     margin-top: -20px;
//     border-radius: 40px;
//     z-index: 1;
// `;

const Header = styled.header`
    position: relative;
    width: 100%;
    height: 12rem;
`;

const HeaderImage = styled.div`
    position: absolute;
    inset: 0;
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

const HeaderImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeaderContent = styled.div`
    position: relative;
    padding: 1rem;
`;

const HeaderTitle = styled.h1`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: -1.5rem;
`;

const MainContent = styled.div`
    padding: 0 1rem 1.5rem;
    border: solid 5px red;
    margin-top: -20px;
    z-index: 1;
    border-radius: 20px;
    background: wheat;
`;

const GrayLine = styled.h1`
    border: none;
    border-top: 5px solid #d1d5db; 
    margin: 1rem auto; 
    width: 20%;
    border-radius: 5px;
    text-align: center; 
`;

const SectionTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left; 
    text-align: left;
`;

const OfferCard = styled.div`
    background: linear-gradient(135deg,
    #FFF5E9 0%,
    #FFE8D9 25%,
    #FFDCC6 50%,
    #FFE8D9 75%,
    #FFF5E9 100%
    );
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    max-width: 42rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg,
        rgba(255,255,255,0.1) 0%,
        rgba(255,255,255,0.3) 50%,
        rgba(255,255,255,0.1) 100%
        );
        pointer-events: none;
    }
`;

const OfferContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const OfferInfo = styled.div`
    flex: 1;
`;

const BrandWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    align-items: center;
`;

const BrandImage = styled.img`
    width: 5rem;
    height: 2rem;
`;

const BrandName = styled.span`
    font-size: 0.875rem;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

const OfferTitle = styled.h3`
    font-weight: 600;
    margin-bottom: 0.25rem;
`;

const DiscountText = styled.p`
    color: #f97316;
    font-weight: 500;
`;

const ViewMoreButton = styled.button`
    margin-top: 0.75rem;
    padding: 0.5rem 1rem;
    background-color: #fb923c;
    color: white;
    border-radius: 9999px;
    font-size: 0.875rem;
`;

const CategorySection = styled.div`
    margin-top: 2rem;
`;

const CategoryList = styled.div`
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const StoreGrid = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: #ffedd5;
  color: #ea580c;
  border-radius: 9999px;
  font-size: 0.75rem;
`;

const Home = () => {
    const totalSlides = 3;
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [merchantDataGet, setMerchantData] = useState<MerchantData[]>([]);

    const handleDotClick = React.useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    const handleButton = (id : string) => {
        navigate(`/landing/${id}`);
    };

    const handleButtonNavigate = () => {
        navigate(`/`);
    }

    const handleButtonClick = React.useCallback((category: string) => {
        const filteredMerchantData = merchantDataGet.filter((merchant) =>
          merchant.category.name.includes(category)
        );
        setMerchantData(filteredMerchantData)
    }, [merchantDataGet]);

    const handleFavoriteClick =  React.useCallback((storeName: string) => {
        console.log(`${storeName} added to favorites!`);
    }, []);

    const { data, error, isLoading } = useGetOffersQuery();

    useEffect(() => {
        if(data?.offers.length){
            const merchant = data?.offers.map((offer: any) => offer?.merchant)
            setMerchantData(merchant);
        }
    }, [data]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: </div>;

    return (
        <Container>
            {/* <HeaderLine> */}
            <Header>
                <HeaderImage>
                    <HeaderImg src="https://s3-alpha-sig.figma.com/img/c862/cfa0/8b479bf669f459c69f7c87c13c641f94?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kmIeL5gKdbiM5L3gMgngdznYtLU-~uEGEQ9yaLc1ghNoBjlz3DbOteu-mleBD5sOUL6y5P7fktwuXM7UFMJ6PHOal-6M60zWvyb9m1~v9YAsFIxEPzEXpHU~vOMZexXxL9pWUqimc1pOYDaaNnjeY~gCbdXX1LldylAauoQSHlOpWZHNPy7tOxEExahenb2D1dqcR5gaumbKB~XSORMuFxDPFdRCyka2CAOXx9Qy-SyL6idDGpQkDXuUZjbUq9lu77W9D--kHiyQqiWAFyyI78aZrtS8UA43GX9tzX0cK4jK~7sArDg-30XOUfFNnaeWugzM2wWrFsfCzVXgLKakKA__" alt="Tokyo cityscape" />
                </HeaderImage>
                <HeaderContent>
                    <BackButtonComponent onClick={() => handleButtonNavigate()} />
                    <HeaderTitle>Tokyo</HeaderTitle>
                </HeaderContent>
            </Header>

            <MainContent>
                <GrayLine></GrayLine>
                <SectionTitle>Special Offers!</SectionTitle>
                <OfferCard>
                    <OfferContent>
                        <OfferInfo>
                            <BrandWrapper>
                                <BrandImage src="/api/placeholder/30/30" alt="SK-II" />
                                <BrandName>SK-II</BrandName>
                            </BrandWrapper>
                            <OfferTitle>Get Special Offer</OfferTitle>
                            <DiscountText>Up to 9% discount</DiscountText>
                            <ViewMoreButton>View More</ViewMoreButton>
                        </OfferInfo>
                        <Image
                            src="/api/placeholder/30/30"
                            alt="Beauty product"
                            style={{ width: '6rem', height: '100%' }}
                        />
                    </OfferContent>
                </OfferCard>

                <DotWidget
                  total={totalSlides}
                  current={currentSlide}
                  onDotClick={handleDotClick}
                />

                <CategorySection>
                    <SectionTitle>Explore Tokyo's Best Category</SectionTitle>
                    <CategoryList>
                        {merchantDataGet.map((cat : MerchantData) => (
                            <CategoryButton
                                key={cat.category.name}
                                category={cat.category.name}
                                icon={cat.image}
                                onClick={() => handleButtonClick(cat.category.name)}
                            />
                        ))}
                    </CategoryList>
                </CategorySection>

                <StoreGrid>
                    {merchantDataGet.map((store : any) => (
                        <div onClick={() => handleButton(store.id)}>
                            <CardWidget
                              key={store.category.name}
                              storeImageSrc={store.image}
                              storeName={store.category.name}
                              storeLogoSrc={store.image}
                              discountText={store.discount}
                              onFavoriteClick={() => handleFavoriteClick(store.image)}
                            />
                            <TagContainer>
                                <Tag>Desert</Tag>
                                <Tag>Exclusive</Tag>
                            </TagContainer>
                        </div>
                    ))}
                </StoreGrid>
            </MainContent>
            {/* </HeaderLine> */}
        </Container>
    );
};

export default Home;