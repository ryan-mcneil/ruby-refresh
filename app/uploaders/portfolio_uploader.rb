class PortfolioUploader < CarrierWave::Uploader::Base
  
  storage :aws

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}/rand(100000000000)"
  end
 
  def extension_whitelist
    %w(jpg jpeg gif png)
  end

end
