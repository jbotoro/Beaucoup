json.set! @current_user.id do
    json.extract! @user_stuff, :show_id 
end