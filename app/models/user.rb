class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  after_initialize :ensure_session_token

  attr_reader :password
  validates :password, length: { minimum: 6, allow_nil: true }

  def self.generate_session_token
    loop do
      token = SecureRandom.urlsafe_base64(16)
      return token unless exists?(session_token: token)
    end
  end

  def self.find_by_credentials(email, password)
    user = find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password).to_s
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    session_token
  end
end
