# == Schema Information
#
# Table name: episodes
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  episode_number :integer          not null
#  description    :text             not null
#  show_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class EpisodeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
