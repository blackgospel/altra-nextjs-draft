import WellbeingImage1 from 'assets/images/wellbeing/wellbeing-section-2.png'
import ProductsDescription from 'components/products/descriptions/products.descriptions'

const FamilyIntroduction: React.FC = () => {
  return (
    <ProductsDescription
      title="Keep Families in the loop"
      description="Secure engagement app that allows care homes to share updates on the
    well-being of residents directly with families. Families only see
    information relevant to their loved one through videos, pictures,
    messages and more."
      image={WellbeingImage1}
      color="violet"
    />
  )
}

export default FamilyIntroduction
