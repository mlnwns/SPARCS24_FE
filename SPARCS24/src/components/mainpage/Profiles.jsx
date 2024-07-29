import styled from "styled-components";

const ProfilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  margin-bottom: 4rem;
`;

const ProfileCard = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: white;
`;

const Address = styled.p`
  margin-bottom: 7px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Name = styled.p`
  margin: 5px 0 0;
  font-size: 0.9rem;
`;

const Profiles = () => {
  const profiles = [
    { src: "/img2.png", address: "성북구 정릉동", name: "김*경 하모니•58세" },
    { src: "/img2.png", address: "강남구 역삼동", name: "이*희 하모니•62세" },
    { src: "/img2.png", address: "마포구 합정동", name: "박*철 하모니•55세" },
    { src: "/img2.png", address: "서초구 반포동", name: "최*영 하모니•60세" },
  ];

  return (
    <ProfilesContainer>
      {profiles.map((profile, index) => (
        <ProfileCard key={index}>
          <ProfileImage src={profile.src} alt={profile.name} />
          <ProfileInfo>
            <Address>{profile.address}</Address>
            <Name>{profile.name}</Name>
          </ProfileInfo>
        </ProfileCard>
      ))}
    </ProfilesContainer>
  );
};

export default Profiles;
