class CreateSheetMusics < ActiveRecord::Migration[7.1]
  def change
    create_table :sheet_musics do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
