# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
ProductPhoto.destroy_all
Cart.destroy_all

brendan = User.create!(
  email: 'brendanekane@gmail.com',
  password: 'starwars',
  height: '67',
  weight: '150',
  location: 'United States',
  avatar: 'https://s3.amazonaws.com/retailed-seed/brendan_avatar.jpg'
)

han_solo = User.create!(
  email: 'han_solo@gmail.com',
  password: 'starwars',
  height: '74',
  weight: '200',
  location: 'Australia/NZ',
  avatar: 'https://s3.amazonaws.com/retailed-seed/Harrison-Ford-Han-Solo.jpg'
)

#This is my dog, not Carrie Fisher :)
leia = User.create!(
  email: 'leia@gooddog.com',
  password: 'goodgirl',
  height: '27',
  weight: '45',
  location: 'United States',
  avatar: 'https://s3.amazonaws.com/retailed-seed/leia_avatar.jpg'
)

luke = User.create!(
  email: 'luke@gmail.com',
  password: 'starwars',
  height: '71',
  weight: '180',
  location: 'Europe',
  avatar: 'https://s3.amazonaws.com/retailed-seed/luke-skywalker-retrojpg.jpeg'
)

chewie = User.create!(
  email: 'chewie@gmail.com',
  password: 'starwars',
  height: '91',
  weight: '250',
  location: 'United Kingdom',
  avatar: 'https://s3.amazonaws.com/retailed-seed/Chewbacca_TLJ.png'
)

michael_scott = User.create!(
  email: 'michael_scott@gmail.com',
  password: 'office',
  height: '67',
  weight: '145',
  location: 'United States',
  avatar: 'https://s3.amazonaws.com/retailed-seed/michael_scott.jpeg'
)

pam = User.create!(
  email: 'pam_beesly@gmail.com',
  password: 'office',
  height: '63',
  weight: '120',
  location: 'Asia',
  avatar: 'https://s3.amazonaws.com/retailed-seed/michael_scott.jpeg'
)

jim = User.create!(
  email: 'jim_halpert@gmail.com',
  password: 'office',
  height: '75',
  weight: '200',
  location: 'Canada',
  avatar: 'https://s3.amazonaws.com/retailed-seed/jim_halpert.jpg'
)

leslie = User.create!(
  email: 'leslie_knope@gmail.com',
  password: 'parksrec',
  height: '60',
  weight: '110',
  location: 'United States',
  avatar: 'https://s3.amazonaws.com/retailed-seed/leslie_knope.jpg'
)

ben = User.create!(
  email: 'ben_wyatt@gmail.com',
  password: 'parksrec',
  height: '60',
  weight: '110',
  location: 'Canada',
  avatar: 'https://s3.amazonaws.com/retailed-seed/ben_wyatt.png'
)

illegal_business_hat = Product.create!(
  user_id: brendan.id,
  price: 149.99,
  designer: 'Supreme',
  name: 'Illegal Business 5-Panel',
  clothing_type: 'Accessories',
  size: 'OS',
  clothing_category: 'Hype',
  description: 'Slightly used'
)

illegal_business_pic_1 = ProductPhoto.create!(
  product_id: illegal_business_hat.id,
  image: 'https://s3.amazonaws.com/retailed-seed/illegal_business.jpg'
)

saint_laurent_l01 = Product.create!(
  user_id: han_solo.id,
  price: 2499.99,
  designer: 'Saint Laurent',
  name: 'L01',
  clothing_type: 'Outerwear',
  size: 'S',
  clothing_category: 'Retailed',
  description: 'Well worn, still in great condition'
)

saint_laurent_l01_pic_1 = ProductPhoto.create!(
  product_id: saint_laurent_l01.id,
  image: 'https://s3.amazonaws.com/retailed-seed/L01.jpg'
)

seven_samurai = Product.create!(
  user_id: brendan.id,
  price: 199.99,
  designer: 'Supreme',
  name: 'Seven Samurai Tee',
  clothing_type: 'Tops',
  size: 'M',
  clothing_category: 'Hype',
  description: 'Slightly used, collar pilling'
)

seven_samurai_pic_1 = ProductPhoto.create!(
  product_id: seven_samurai.id,
  image: 'https://s3.amazonaws.com/retailed-seed/IMG_1570.jpg'
)

taxi_driver = Product.create!(
  user_id: leia.id,
  price: 799.99,
  designer: 'Supreme',
  name: 'Taxi Driver Tee',
  clothing_type: 'Tops',
  size: 'S',
  clothing_category: 'Hype',
  description: 'New with tags'
)

taxi_driver_pic_1 = ProductPhoto.create!(
  product_id: taxi_driver.id,
  image: 'https://s3.amazonaws.com/retailed-seed/sup_taxi.jpg'
)

tie_dye_tri_ferg = Product.create!(
  user_id: michael_scott.id,
  price: 79.99,
  designer: 'Palace',
  name: 'Tie Die Tri Ferg Tee',
  clothing_type: 'Tops',
  size: 'M',
  clothing_category: 'Hype',
  description: 'New in bag'
)

tie_dye_tri_ferg_pic_1 = ProductPhoto.create!(
  product_id: tie_dye_tri_ferg.id,
  image: 'https://s3.amazonaws.com/retailed-seed/palace_triferg.jpeg'
)

blue_tint_v2 = Product.create!(
  user_id: jim.id,
  price: 499.99,
  designer: 'Adidas',
  name: 'Yeezy Boost 350 v2 Blue Tint',
  clothing_type: 'Footwear',
  size: 'M',
  clothing_category: 'Hype',
  description: 'New in box'
)

blue_tint_v2_pic_1 = ProductPhoto.create!(
  product_id: blue_tint_v2.id,
  image: 'https://s3.amazonaws.com/retailed-seed/v2_zebra.jpeg'
)

supreme_brick = Product.create!(
  user_id: brendan.id,
  price: 350.99,
  designer: 'Supreme',
  name: 'Supreme Brick',
  clothing_type: 'Accessories',
  size: 'OS',
  clothing_category: 'Hype',
  description: 'New in box, minor manufacturer defects'
)

supreme_brick_pic_1 = ProductPhoto.create!(
  product_id: supreme_brick.id,
  image: 'https://s3.amazonaws.com/retailed-seed/Supreme-Brick-Brick.jpg'
)

ilu_zespy = Product.create!(
  user_id: ben.id,
  price: 79.99,
  designer: 'I Love Ugly',
  name: 'Zespy Army Green',
  clothing_type: 'Bottoms',
  size: 'M',
  clothing_category: 'Hype',
  description: 'New in bag'
)

ilu_zespy_pic_1 = ProductPhoto.create!(
  product_id: ilu_zespy.id,
  image: 'https://s3.amazonaws.com/retailed-seed/zespy_green.jpg'
)

gucci_monaco = Product.create!(
  user_id: leslie.id,
  price: 2999.99,
  designer: 'Gucci',
  name: 'Monaco empty dots twill suit',
  clothing_type: 'Tailoring',
  size: 'M',
  clothing_category: 'Sartorial',
  description: 'Used, still in great condition'
)

gucci_monaco_pic_1 = ProductPhoto.create!(
  product_id: gucci_monaco.id,
  image: 'https://s3.amazonaws.com/retailed-seed/gucci_suit.jpg'
)

uniqlo_shirt = Product.create!(
  user_id: pam.id,
  price: 19.99,
  designer: 'Uniqlo',
  name: 'Women\'s premium linen checked long-sleeve',
  clothing_type: 'Top',
  size: 'XS',
  clothing_category: 'Core',
  description: 'New'
)

uniqlo_shirt_pic_1 = ProductPhoto.create!(
  product_id: uniqlo_shirt.id,
  image: 'https://s3.amazonaws.com/retailed-seed/uniqlo_shirt.jpeg'
)
