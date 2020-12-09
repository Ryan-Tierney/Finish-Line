class User < ApplicationRecord
    validates :username, uniquess: true, presence: true 
    has_many :comments 
end
