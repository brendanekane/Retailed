# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

brendan = User.create!(
  email: 'brendanekane@gmail.com',
  password: 'starwars',
  height: '67',
  weight: '150',
  location: 'United States'
)

han_solo = User.create!(
  email: 'han_solo@gmail.com',
  password: 'starwars',
  height: '74',
  weight: '200',
  location: 'Australia/NZ'
)

#This is my dog, not Carrie Fisher :)
leia = User.create!(
  email: 'leia@gooddog.com',
  password: 'goodgirl',
  height: '27',
  weight: '45',
  location: 'United States'
)

luke = User.create!(
  email: 'luke@gmail.com',
  password: 'starwars',
  height: '71',
  weight: '180',
  location: 'Europe'
)

chewie = User.create!(
  email: 'chewie@gmail.com',
  password: 'starwars',
  height: '91',
  weight: '250',
  location: 'United Kingdom'
)

michael_scott = User.create!(
  email: 'michael_scott@gmail.com',
  password: 'office',
  height: '67',
  weight: '145',
  location: 'United States'
)

pam = User.create!(
  email: 'pam_beesly@gmail.com',
  password: 'office',
  height: '63',
  weight: '120',
  location: 'Asia'
)

jim = User.create!(
  email: 'jim_halpert@gmail.com',
  password: 'office',
  height: '75',
  weight: '200',
  location: 'Canada'
)

leslie = User.create!(
  email: 'leslie_knope@gmail.com',
  password: 'parksrec',
  height: '60',
  weight: '110',
  location: 'United States'
)

ben = User.create!(
  email: 'ben_wyatt@gmail.com',
  password: 'parksrec',
  height: '60',
  weight: '110',
  location: 'Canada'
)
