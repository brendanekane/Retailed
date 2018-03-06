class User < ApplicationRecord
  validates :email, :passwordDigest, :sessionToken, presence: true
  validates :email, :sessionToken, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.passwordDigest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(passwordDigest).is_password?(password)
  end

  def reset_session_token!
    self.sessionToken = SecureRandom.urlsafe_base64
    self.save!
    self.sessionToken
  end

  def ensure_session_token
    self.sessionToken ||= SecureRandom.urlsafe_base64
  end
end
